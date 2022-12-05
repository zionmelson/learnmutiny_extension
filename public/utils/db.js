import { openDB } from "idb";

export function openDatabase() {
  openDB("Encrypted Links", 1, {
    upgrade(db) {
      db.createObjectStore("Encryptions");
    },
  });
}

export async function addBookmark(bookmark) {
  const db = await openDB("Encrypted Links", 1);
  db.put("Encryptions", bookmark);
  db.close();
}

export async function getBookmark() {
  const db = await openDB("Encrypted Links", 1);
  return db.getAll("Encryptions");
}
