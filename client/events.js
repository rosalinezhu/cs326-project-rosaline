class events {
    constructor() {
        this.events = [];
    }
    async saveEvent(date, startTime, endTime, event){
        this.events.push({date, startTime, endTime, event});

        const data = JSON.stringify({date, startTime, endTime, event});
        const response = await fetch('/saveEvent',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: data,
          });
      
        if (!response.ok) {
        console.error(`Unable to save ${data} to server`);
        }
    }
}