import { readFile, writeFile } from 'fs/promises';

class Database {
  constructor() {
    let events = {};
    this.path = 'events.json';
  }
  async saveEvent(date, startTime, endTime, event){
    const data = JSON.stringify(events);
    data.push({date, startTime, endTime, event});
    await this._write(data);

  }

  async displayEvents(){
    const data = await this._read();
    return data;
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