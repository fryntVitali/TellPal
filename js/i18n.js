/**
 * KommUnikation – i18n Internationalization
 * Active: de, en, tr, uk, ru
 * Planned: fr, es, it, pt, nl, da, sv, no, fi, is, pl, fa, ar, cs, hr, sr, bs
 */
const I18N = (() => {
    const STORAGE_KEY = 'kommunikation-lang';

    const languages = {
        de: { name: 'Deutsch', flag: '🇩🇪', speechLang: 'de-DE' },
        en: { name: 'English', flag: '🇬🇧', speechLang: 'en-US' },
        tr: { name: 'Türkçe', flag: '🇹🇷', speechLang: 'tr-TR' },
        uk: { name: 'Українська', flag: '🇺🇦', speechLang: 'uk-UA' },
        ru: { name: 'Русский', flag: '🇷🇺', speechLang: 'ru-RU' },
    };

    const ui = {
        de: {
            appTitle: 'KommUnikation',
            settings: 'Einstellungen',
            editMode: 'Bearbeitungsmodus',
            resetAll: 'Alle Anpassungen zurücksetzen',
            resetConfirm: 'Alle Anpassungen wirklich zurücksetzen?',
            editModeHint: 'Aktivieren, um Bilder, Texte und Sounds anzupassen. Es erscheint ✏️ auf jedem Symbol.',
            editTitle: 'bearbeiten',
            changeImage: 'Bild ändern',
            chooseImage: '📷 Eigenes Bild wählen',
            resetImage: 'Standard-Bild',
            changeText: 'Text ändern',
            labelPlaceholder: 'Beschriftung',
            speechPlaceholder: 'Gesprochener Text',
            changeSound: 'Sound ändern',
            record: '🎙️ Aufnehmen',
            stop: '⏹️ Stopp',
            listen: '▶️ Anhören',
            resetSound: 'Standard-Sound',
            save: '💾 Speichern',
            cancel: 'Abbrechen',
            recording: '⏺ Aufnahme läuft...',
            recordingSaved: 'Aufnahme gespeichert ✓',
            soundReset: 'Sound zurückgesetzt.',
            micDenied: 'Mikrofon-Zugriff verweigert.',
            imageTooLarge: 'Bild zu groß (max. 2 MB).',
            language: 'Sprache',
        },
        en: {
            appTitle: 'KommUnikation',
            settings: 'Settings',
            editMode: 'Edit Mode',
            resetAll: 'Reset all customizations',
            resetConfirm: 'Really reset all customizations?',
            editModeHint: 'Enable to customize images, texts and sounds. A ✏️ will appear on each symbol.',
            editTitle: 'edit',
            changeImage: 'Change image',
            chooseImage: '📷 Choose image',
            resetImage: 'Default image',
            changeText: 'Change text',
            labelPlaceholder: 'Label',
            speechPlaceholder: 'Spoken text',
            changeSound: 'Change sound',
            record: '🎙️ Record',
            stop: '⏹️ Stop',
            listen: '▶️ Listen',
            resetSound: 'Default sound',
            save: '💾 Save',
            cancel: 'Cancel',
            recording: '⏺ Recording...',
            recordingSaved: 'Recording saved ✓',
            soundReset: 'Sound reset.',
            micDenied: 'Microphone access denied.',
            imageTooLarge: 'Image too large (max. 2 MB).',
            language: 'Language',
        },
        tr: {
            appTitle: 'KommUnikation',
            settings: 'Ayarlar',
            editMode: 'Düzenleme Modu',
            resetAll: 'Tüm özelleştirmeleri sıfırla',
            resetConfirm: 'Tüm özelleştirmeleri sıfırlamak istiyor musunuz?',
            editModeHint: 'Resimleri, metinleri ve sesleri özelleştirmek için etkinleştirin. Her sembolde ✏️ görünecektir.',
            editTitle: 'düzenle',
            changeImage: 'Resmi değiştir',
            chooseImage: '📷 Resim seç',
            resetImage: 'Varsayılan resim',
            changeText: 'Metni değiştir',
            labelPlaceholder: 'Etiket',
            speechPlaceholder: 'Söylenen metin',
            changeSound: 'Sesi değiştir',
            record: '🎙️ Kaydet',
            stop: '⏹️ Durdur',
            listen: '▶️ Dinle',
            resetSound: 'Varsayılan ses',
            save: '💾 Kaydet',
            cancel: 'İptal',
            recording: '⏺ Kaydediliyor...',
            recordingSaved: 'Kayıt kaydedildi ✓',
            soundReset: 'Ses sıfırlandı.',
            micDenied: 'Mikrofon erişimi reddedildi.',
            imageTooLarge: 'Resim çok büyük (maks. 2 MB).',
            language: 'Dil',
        },
        uk: {
            appTitle: 'KommUnikation',
            settings: 'Налаштування',
            editMode: 'Режим редагування',
            resetAll: 'Скинути всі налаштування',
            resetConfirm: 'Справді скинути всі налаштування?',
            editModeHint: 'Увімкніть, щоб змінювати зображення, тексти та звуки. На кожному символі з\'явиться ✏️.',
            editTitle: 'редагувати',
            changeImage: 'Змінити зображення',
            chooseImage: '📷 Вибрати зображення',
            resetImage: 'Стандартне зображення',
            changeText: 'Змінити текст',
            labelPlaceholder: 'Підпис',
            speechPlaceholder: 'Вимовний текст',
            changeSound: 'Змінити звук',
            record: '🎙️ Записати',
            stop: '⏹️ Стоп',
            listen: '▶️ Прослухати',
            resetSound: 'Стандартний звук',
            save: '💾 Зберегти',
            cancel: 'Скасувати',
            recording: '⏺ Запис...',
            recordingSaved: 'Запис збережено ✓',
            soundReset: 'Звук скинуто.',
            micDenied: 'Доступ до мікрофона заборонено.',
            imageTooLarge: 'Зображення завелике (макс. 2 МБ).',
            language: 'Мова',
        },
        ru: {
            appTitle: 'KommUnikation',
            settings: 'Настройки',
            editMode: 'Режим редактирования',
            resetAll: 'Сбросить все настройки',
            resetConfirm: 'Действительно сбросить все настройки?',
            editModeHint: 'Включите, чтобы менять изображения, тексты и звуки. На каждом символе появится ✏️.',
            editTitle: 'редактировать',
            changeImage: 'Изменить изображение',
            chooseImage: '📷 Выбрать изображение',
            resetImage: 'Стандартное изображение',
            changeText: 'Изменить текст',
            labelPlaceholder: 'Подпись',
            speechPlaceholder: 'Произносимый текст',
            changeSound: 'Изменить звук',
            record: '🎙️ Записать',
            stop: '⏹️ Стоп',
            listen: '▶️ Прослушать',
            resetSound: 'Стандартный звук',
            save: '💾 Сохранить',
            cancel: 'Отмена',
            recording: '⏺ Запись...',
            recordingSaved: 'Запись сохранена ✓',
            soundReset: 'Звук сброшен.',
            micDenied: 'Доступ к микрофону запрещён.',
            imageTooLarge: 'Изображение слишком большое (макс. 2 МБ).',
            language: 'Язык',
        },
    };

    let currentLang = 'de';

    function init() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && languages[saved]) currentLang = saved;
        document.documentElement.lang = currentLang;
    }

    function setLanguage(lang) {
        if (!languages[lang]) return;
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
    }

    function getLang() { return currentLang; }
    function getSpeechLang() { return languages[currentLang].speechLang; }
    function t(key) { return (ui[currentLang] && ui[currentLang][key]) || ui.de[key] || key; }
    function getLanguages() { return languages; }

    init();
    return { setLanguage, getLang, getSpeechLang, t, getLanguages };
})();
