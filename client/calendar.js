export class Calendar{
    constructor() {
        if (window.localStorage.getItem('events') !== null){
            this.event = JSON.parse(window.localStorage.getItem('events'));
        }
        else{
            this.reset();
        }
    }
    reset(){
        this.event = [];

    }
    render(element){
        for(let event in this.events){
            element.innerHTML = '';
            const startHour = parseInt(event.startTime.split(":")[0]);
            const startMin = parseInt(event.startTime.split(":")[1]);
            const endHour = parseInt(event.endTime.split(":")[0]);
            const endMin = parseInt(event.endTime.split(":")[1]);
            const thedate = new Date(event.date);
            
            const height =  ( (endHour * 60 + endMin) - (startHour * 60 + startMin) );
            const column = thedate.getDate() + 1;
            const row = ((startHour * 60 + startMin) - (9 * 60 )) / 15 + 1 ;
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `${event.name}`;
            newDiv.setAttribute("class", "slot");
            newDiv.style.height = `${height}px`;
            newDiv.style.gridColumn = column;
            newDiv.style.gridRow = row;
        
            element.appendChild(newDiv);
        }

    }

    _saveEvent(){
        window.localStorage.setItem('events', JSON.stringify(this.events));
    }

    placeEvent(date, startTime, endTime, event, element){
        element.innerHTML = '';
        const startHour = parseInt(startTime.split(":")[0]);
        const startMin = parseInt(startTime.split(":")[1]);
        const endHour = parseInt(endTime.split(":")[0]);
        const endMin = parseInt(endTime.split(":")[1]);
        const thedate = new Date(date);
        
        const height =  ( (endHour * 60 + endMin) - (startHour * 60 + startMin) );
        const column = thedate.getDate() + 1;
        const row = ((startHour * 60 + startMin) - (9 * 60 )) / 15 + 1 ;
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `${event}`;
        newDiv.setAttribute("class", "slot");
        newDiv.style.height = `${height}px`;
        newDiv.style.gridColumn = column;
        newDiv.style.gridRow = row;
        element.appendChild(newDiv);

        this.events.push({date, startTime, endTime, event});
        this._saveEvent();

    }
}