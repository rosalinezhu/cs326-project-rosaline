import { readFile, writeFile } from 'fs/promises';

/** A class representing a database to store scores */
class Database {
  constructor() {
    this.path = 'scores.json';
  }
  async saveEvent(date, startTime, endTime, event){
    const data = await this._read();
    data.event.push({date, time, event});
    await this._write(data);
  }

  async _read() {
    try {
      const data = await readFile(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return "data not found";
    }
  }

  async _write(data) {
    await writeFile(this.path, JSON.stringify(data), 'utf8');
  }
}

const database = new Database();

export { database };