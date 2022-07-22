class Events {
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
          console.log(response);
        if (!response.ok) {
        console.error(`Unable to save ${data} to server`);
        }
    }


    async displayEvents(element){
      const eventsRequest = await fetch('/displayEvents');
      const eventsData = eventsRequest.ok
      ? await eventsRequest.json()
      : [];
      let html = '<h1>Upcoming Events</h1>';
      html += '<table class="list-events">';
      html +=
        '<tr><td>Event Name</td><td>Date</td><td>Start Time</td><td>End Time</td></tr>';
        eventsData.forEach((event) => {
        html += `
          <tr>
            <td>${event.name}</td>
            <td>${event.date}</td>
            <td>${event.startTime}</td>
            <td>${event.endTime}</td>
          </tr>
        `;
      });
      html += '</table>';
      element.innerHTML = html;
    }


}

export const events = new Events();