/**
 * KommUnikation – Hauptanwendungslogik (mit i18n)
 */
const App = (() => {
    let navigationStack = [];
    let editMode = false;
    let currentEditItem = null;
    let mediaRecorder = null;
    let recordedChunks = [];
    let customizationsCache = {};

    const grid = document.getElementById('grid-container');
    const btnBack = document.getElementById('btn-back');
    const btnSettings = document.getElementById('btn-settings');
    const pageTitle = document.getElementById('page-title');
    const settingsModal = document.getElementById('settings-modal');
    const editModal = document.getElementById('edit-modal');
    const synth = window.speechSynthesis;

    // ==================== Init ====================
    async function init() {
        await StorageManager.open();
        await loadCustomizations();
        renderLevel(APP_DATA.categories, I18N.t('appTitle'));
        bindGlobalEvents();
    }

    async function loadCustomizations() {
        const all = await StorageManager.getAllCustomizations();
        customizationsCache = {};
        for (const item of all) customizationsCache[item.id] = item;
    }

    // ==================== i18n helpers ====================
    function itemLabel(item) {
        const c = customizationsCache[item.id];
        if (c && c.label) return c.label;
        return getItemText(item).label;
    }
    function itemSpeech(item) {
        const c = customizationsCache[item.id];
        if (c && c.speech) return c.speech;
        return getItemText(item).speech;
    }

    // ==================== Rendering ====================
    function renderLevel(items, title) {
        grid.innerHTML = '';
        pageTitle.textContent = title;
        btnBack.hidden = navigationStack.length === 0;
        items.forEach((item, i) => {
            const card = createCard(item);
            card.style.animationDelay = `${i * 0.02}s`;
            grid.appendChild(card);
        });
        grid.scrollTop = 0;
    }

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = item.id;
        if (item.color) card.dataset.color = item.color;
        if (item.isHelp) card.classList.add('help-card');

        const custom = customizationsCache[item.id];

        if (custom && custom.image) {
            const img = document.createElement('img');
            img.className = 'card-image';
            img.src = custom.image;
            img.alt = itemLabel(item);
            card.appendChild(img);
        } else {
            const emojiDiv = document.createElement('div');
            emojiDiv.className = 'card-emoji';
            emojiDiv.textContent = item.emoji;
            card.appendChild(emojiDiv);
        }

        const label = document.createElement('div');
        label.className = 'card-label';
        label.textContent = itemLabel(item);
        card.appendChild(label);

        const editBtn = document.createElement('button');
        editBtn.className = 'card-edit-btn';
        editBtn.textContent = '✏️';
        editBtn.setAttribute('aria-label', I18N.t('editTitle'));
        editBtn.addEventListener('click', (e) => { e.stopPropagation(); openEditModal(item); });
        card.appendChild(editBtn);

        card.addEventListener('click', () => { if (!editMode) handleCardTap(item, card); });
        return card;
    }

    // ==================== Navigation & Speech ====================
    function handleCardTap(item, cardElement) {
        cardElement.classList.add('speaking');
        setTimeout(() => cardElement.classList.remove('speaking'), 600);

        const custom = customizationsCache[item.id];
        if (custom && custom.sound) {
            playCustomSound(custom.sound);
        } else {
            speak(itemSpeech(item));
        }

        if (item.items && item.items.length > 0) {
            setTimeout(() => {
                const currentItems = navigationStack.length === 0 ? APP_DATA.categories : null;
                navigationStack.push({ items: currentItems || getCurrentDisplayedItems(), title: pageTitle.textContent });
                renderLevel(item.items, itemLabel(item));
            }, 400);
        }
    }

    function getCurrentDisplayedItems() {
        // Reconstruct from the grid
        const ids = Array.from(grid.querySelectorAll('.card')).map(c => c.dataset.id);
        // Find matching items in data tree
        function findItems(items) {
            const itemIds = items.map(i => i.id);
            if (ids.length === itemIds.length && ids.every((id, j) => id === itemIds[j])) return items;
            for (const item of items) {
                if (item.items) { const f = findItems(item.items); if (f) return f; }
            }
            return null;
        }
        return findItems(APP_DATA.categories) || APP_DATA.categories;
    }

    function speak(text) {
        if (!synth) return;
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = I18N.getSpeechLang();
        utterance.rate = 0.9;
        utterance.volume = 1.0;
        const langPrefix = I18N.getSpeechLang().split('-')[0];
        const voices = synth.getVoices();
        const voice = voices.find(v => v.lang.startsWith(langPrefix));
        if (voice) utterance.voice = voice;
        synth.speak(utterance);
    }

    function playCustomSound(base64Audio) {
        const audio = new Audio(base64Audio);
        audio.play().catch(() => {});
    }

    // ==================== Global Events ====================
    function bindGlobalEvents() {
        btnBack.addEventListener('click', goBack);
        btnSettings.addEventListener('click', openSettings);
        document.getElementById('btn-close-modal').addEventListener('click', closeSettings);
        document.getElementById('btn-close-edit').addEventListener('click', closeEditModal);
        document.getElementById('btn-cancel-edit').addEventListener('click', closeEditModal);
        document.getElementById('btn-save-edit').addEventListener('click', saveEdit);
        document.getElementById('btn-record').addEventListener('click', startRecording);
        document.getElementById('btn-stop-record').addEventListener('click', stopRecording);
        document.getElementById('btn-play-custom').addEventListener('click', playRecordedSound);
        document.getElementById('btn-reset-image').addEventListener('click', resetImage);
        document.getElementById('btn-reset-sound').addEventListener('click', resetSound);
        document.getElementById('edit-image-input').addEventListener('change', handleImageUpload);

        settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) closeSettings(); });
        editModal.addEventListener('click', (e) => { if (e.target === editModal) closeEditModal(); });

        if (synth) { synth.onvoiceschanged = () => {}; synth.getVoices(); }
    }

    function goBack() {
        if (navigationStack.length === 0) return;
        const prev = navigationStack.pop();
        renderLevel(prev.items, prev.title);
    }

    // ==================== Settings ====================
    function openSettings() {
        const t = I18N.t.bind(I18N);
        const langs = I18N.getLanguages();
        const curLang = I18N.getLang();

        let langButtons = '';
        for (const [code, info] of Object.entries(langs)) {
            const active = code === curLang ? ' active' : '';
            langButtons += `<button class="lang-btn${active}" data-lang="${code}">${info.flag} ${info.name}</button>`;
        }

        const body = document.getElementById('modal-body');
        body.innerHTML = `
            <ul class="settings-list">
                <li class="settings-item">
                    <label>${t('language')}</label>
                </li>
            </ul>
            <div class="lang-picker">${langButtons}</div>
            <ul class="settings-list" style="margin-top:12px">
                <li class="settings-item">
                    <label for="toggle-edit">${t('editMode')}</label>
                    <div class="toggle">
                        <input type="checkbox" id="toggle-edit" ${editMode ? 'checked' : ''}>
                        <span class="toggle-slider"></span>
                    </div>
                </li>
                <li class="settings-item" id="settings-reset-all">
                    <label>${t('resetAll')}</label>
                    <span style="font-size:1.2rem">🗑️</span>
                </li>
            </ul>
            <div style="margin-top:16px;padding:12px;background:#f0f4f8;border-radius:10px;">
                <p style="font-size:0.85rem;color:#64748b;line-height:1.5;">
                    <strong>${t('editMode')}:</strong> ${t('editModeHint')}
                </p>
            </div>
        `;

        // Language buttons
        body.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                I18N.setLanguage(btn.dataset.lang);
                // Reset navigation and re-render
                navigationStack = [];
                renderLevel(APP_DATA.categories, I18N.t('appTitle'));
                closeSettings();
            });
        });

        document.getElementById('toggle-edit').addEventListener('change', (e) => {
            editMode = e.target.checked;
            document.body.classList.toggle('edit-mode', editMode);
        });

        document.getElementById('settings-reset-all').addEventListener('click', async () => {
            if (confirm(t('resetConfirm'))) {
                await StorageManager.clearAll();
                customizationsCache = {};
                navigationStack = [];
                renderLevel(APP_DATA.categories, I18N.t('appTitle'));
                closeSettings();
            }
        });

        document.getElementById('modal-title').textContent = t('settings');
        settingsModal.hidden = false;
    }

    function closeSettings() { settingsModal.hidden = true; }

    // ==================== Edit Modal ====================
    function openEditModal(item) {
        currentEditItem = item;
        const custom = customizationsCache[item.id];
        const t = I18N.t.bind(I18N);

        document.getElementById('edit-modal-title').textContent = `"${itemLabel(item)}" ${t('editTitle')}`;

        const preview = document.getElementById('edit-image-preview');
        if (custom && custom.image) {
            preview.innerHTML = `<img src="${escapeHtml(custom.image)}" alt="">`;
        } else {
            preview.innerHTML = '';
            preview.textContent = item.emoji;
        }

        // Update UI text for current language
        document.querySelector('#edit-modal-body .edit-section:nth-child(1) h3').textContent = t('changeImage');
        document.querySelector('#edit-modal-body .file-upload-btn').childNodes[0].textContent = t('chooseImage') + ' ';
        document.getElementById('btn-reset-image').textContent = t('resetImage');
        document.querySelector('#edit-modal-body .edit-section:nth-child(2) h3').textContent = t('changeText');
        document.getElementById('edit-label-input').placeholder = t('labelPlaceholder');
        document.getElementById('edit-speech-input').placeholder = t('speechPlaceholder');
        document.querySelector('#edit-modal-body .edit-section:nth-child(3) h3').textContent = t('changeSound');
        document.getElementById('btn-record').textContent = t('record');
        document.getElementById('btn-stop-record').textContent = t('stop');
        document.getElementById('btn-play-custom').textContent = t('listen');
        document.getElementById('btn-reset-sound').textContent = t('resetSound');
        document.getElementById('btn-save-edit').textContent = t('save');
        document.getElementById('btn-cancel-edit').textContent = t('cancel');

        document.getElementById('edit-label-input').value = itemLabel(item);
        document.getElementById('edit-speech-input').value = itemSpeech(item);

        recordedChunks = [];
        document.getElementById('btn-play-custom').hidden = !(custom && custom.sound);
        document.getElementById('btn-stop-record').hidden = true;
        document.getElementById('btn-record').hidden = false;
        document.getElementById('recording-status').textContent = '';

        editModal.hidden = false;
    }

    function closeEditModal() {
        editModal.hidden = true;
        currentEditItem = null;
        stopRecordingIfActive();
    }

    function escapeHtml(str) {
        const d = document.createElement('div');
        d.appendChild(document.createTextNode(str));
        return d.innerHTML;
    }

    async function saveEdit() {
        if (!currentEditItem) return;
        const itemId = currentEditItem.id;
        const existing = customizationsCache[itemId] || {};
        const label = document.getElementById('edit-label-input').value.trim();
        const speech = document.getElementById('edit-speech-input').value.trim();

        const txt = getItemText(currentEditItem);
        const data = {
            label: label || txt.label,
            speech: speech || txt.speech,
        };

        if (existing.image !== undefined) data.image = existing.image;
        if (existing.sound !== undefined) data.sound = existing.sound;

        if (recordedChunks.length > 0) {
            const blob = new Blob(recordedChunks, { type: 'audio/webm' });
            data.sound = await blobToBase64(blob);
        }

        await StorageManager.saveCustomization(itemId, data);
        customizationsCache[itemId] = { id: itemId, ...data };
        refreshCurrentView();
        closeEditModal();
    }

    function refreshCurrentView() {
        if (navigationStack.length === 0) {
            renderLevel(APP_DATA.categories, I18N.t('appTitle'));
        } else {
            const title = pageTitle.textContent;
            const items = findItemsByTitle(title);
            if (items) renderLevel(items, title);
        }
    }

    function findItemsByTitle(title) {
        function search(items) {
            for (const item of items) {
                if (itemLabel(item) === title && item.items) return item.items;
                if (item.items) { const f = search(item.items); if (f) return f; }
            }
            return null;
        }
        return search(APP_DATA.categories);
    }

    // ==================== Image Upload ====================
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file || !file.type.startsWith('image/')) return;
        if (file.size > 2 * 1024 * 1024) { alert(I18N.t('imageTooLarge')); return; }

        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target.result;
            document.getElementById('edit-image-preview').innerHTML = `<img src="${escapeHtml(dataUrl)}" alt="">`;
            if (!customizationsCache[currentEditItem.id]) {
                customizationsCache[currentEditItem.id] = { id: currentEditItem.id };
            }
            customizationsCache[currentEditItem.id].image = dataUrl;
        };
        reader.readAsDataURL(file);
    }

    function resetImage() {
        if (!currentEditItem) return;
        const preview = document.getElementById('edit-image-preview');
        preview.innerHTML = '';
        preview.textContent = currentEditItem.emoji;
        if (customizationsCache[currentEditItem.id]) delete customizationsCache[currentEditItem.id].image;
    }

    // ==================== Sound Recording ====================
    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            recordedChunks = [];
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.push(e.data); };
            mediaRecorder.onstop = () => {
                stream.getTracks().forEach(track => track.stop());
                document.getElementById('btn-record').hidden = false;
                document.getElementById('btn-stop-record').hidden = true;
                document.getElementById('btn-record').classList.remove('recording');
                document.getElementById('recording-status').textContent = I18N.t('recordingSaved');
                document.getElementById('btn-play-custom').hidden = false;
            };
            mediaRecorder.start();
            document.getElementById('btn-record').hidden = true;
            document.getElementById('btn-stop-record').hidden = false;
            document.getElementById('btn-stop-record').classList.add('recording');
            document.getElementById('recording-status').textContent = I18N.t('recording');
        } catch (err) {
            document.getElementById('recording-status').textContent = I18N.t('micDenied');
        }
    }

    function stopRecording() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            document.getElementById('btn-stop-record').classList.remove('recording');
        }
    }

    function stopRecordingIfActive() {
        if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
    }

    function playRecordedSound() {
        if (recordedChunks.length > 0) {
            const blob = new Blob(recordedChunks, { type: 'audio/webm' });
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            audio.play();
            audio.onended = () => URL.revokeObjectURL(url);
        } else if (currentEditItem) {
            const c = customizationsCache[currentEditItem.id];
            if (c && c.sound) playCustomSound(c.sound);
        }
    }

    function resetSound() {
        if (!currentEditItem) return;
        recordedChunks = [];
        if (customizationsCache[currentEditItem.id]) delete customizationsCache[currentEditItem.id].sound;
        document.getElementById('btn-play-custom').hidden = true;
        document.getElementById('recording-status').textContent = I18N.t('soundReset');
    }

    function blobToBase64(blob) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }

    return { init };
})();

document.addEventListener('DOMContentLoaded', () => App.init());
