import { cache } from "react";
import sql from "better-sqlite3";

const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

// ########## Rquest Memoization : For Using custom Database  ##########
// ########### Stoping duplicate requests to database using cache function. ###########
export const getMessages = cache(function getMessages() {
  console.log("Fetching messages from db");
  return db.prepare("SELECT * FROM messages").all();
});

// using cache only one call is executed and the response of the call is stored and reused for the second call
