import { readFile, writeFile } from 'fs/promises';

/** A class representing a database to store scores */
class Database {
  constructor() {
    this.path = 'scores.json';
  }

  async _read() {
    try {
      const data = await readFile(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return { word: [], game: [] };
    }
  }

  // This is a private methods. The # prefix means that they are private.
  async _write(data) {
    await writeFile(this.path, JSON.stringify(data), 'utf8');
  }
}

const database = new Database();

export { database };