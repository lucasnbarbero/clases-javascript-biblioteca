export const DB_NAME = "Bokings";

export const STORE_NAME = "guests";

export const DB_VERSION = 1;

export class Database {

    static openDB() {
        return new Promise((resolve, reject) => {
          const request = indexedDB.open(DB_NAME, DB_VERSION);
    
          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const storeExists = db.objectStoreNames.contains(STORE_NAME);
            if (!storeExists) {
              db.createObjectStore(STORE_NAME, {
                keyPath: "id",
                autoIncrement: true, 
            });
            }
          };
    
          request.onsuccess = (event) => {
            resolve(event.target.result);
          };
    
          request.onerror = (event) => {
            reject(event.target.error);
          };
        });
      }

}