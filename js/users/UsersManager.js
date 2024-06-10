import { Database } from "./db.js";

const STORE_NAME = "users";

export class UserManager {

    static async addUser(user) {
        return Database.openDB().then((db) => {
          return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], "readwrite");
            const store = transaction.objectStore(STORE_NAME);
            const request = store.add(task);
    
            request.onsuccess = () => {
              resolve();
            };
    
            request.onerror = (event) => {
              reject(event.target.error);
            };
          });
        });
      }

     static async getAllUsers() {
        return Database.openDB().then((db) => {
            // Retorna una nueva promesa para manejar la asincronía de la operación
            return new Promise((resolve, reject) => {
              // Inicia una transacción de solo lectura en el almacén de objetos STORE_NAME
              const transaction = db.transaction([STORE_NAME], "readonly");
              // Obtiene el almacén de objetos que contiene las tareas
              const store = transaction.objectStore(STORE_NAME);
              // Realiza una solicitud para obtener todas las tareas del almacén
              const request = store.getAll();
      
              // Maneja el evento cuando la operación de obtener todas las tareas tiene éxito
              request.onsuccess = (event) => {
                // Resuelve la promesa con el array de objetos que representan todas las tareas en la base de datos
                resolve(event.target.result);
              };
      
              // Maneja el evento si hay un error al obtener las tareas
              request.onerror = (event) => {
                // Rechaza la promesa con el error ocurrido
                reject(event.target.error);
              };
            });
          });
    }
}