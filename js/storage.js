/**
 * KommUnikation – IndexedDB Storage
 * Speichert benutzerdefinierte Bilder, Sounds und Labels
 */

const StorageManager = (() => {
    const DB_NAME = 'KommUnikationDB';
    const DB_VERSION = 1;
    const STORE_NAME = 'customizations';
    let db = null;

    function open() {
        return new Promise((resolve, reject) => {
            if (db) { resolve(db); return; }
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                if (!database.objectStoreNames.contains(STORE_NAME)) {
                    database.createObjectStore(STORE_NAME, { keyPath: 'id' });
                }
            };

            request.onsuccess = (event) => {
                db = event.target.result;
                resolve(db);
            };

            request.onerror = (event) => {
                reject(event.target.error);
            };
        });
    }

    async function getCustomization(itemId) {
        const database = await open();
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.get(itemId);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    async function saveCustomization(itemId, data) {
        const database = await open();
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const record = { id: itemId, ...data };
            const request = store.put(record);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async function deleteCustomization(itemId) {
        const database = await open();
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.delete(itemId);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async function getAllCustomizations() {
        const database = await open();
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });
    }

    async function clearAll() {
        const database = await open();
        return new Promise((resolve, reject) => {
            const tx = database.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.clear();
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    return {
        open,
        getCustomization,
        saveCustomization,
        deleteCustomization,
        getAllCustomizations,
        clearAll
    };
})();
