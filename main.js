const eventName = document.getElementById("eventname");
const eventDate = document.getElementById("date");
const start = document.getElementById("starttime");
const end = document.getElementById("endtime");
const create = document.getElementById("create");


create.addEventListener("click", function(){addEvent(eventName.value, eventDate.value, start.value, end.value)});

function addEvent(name, date, startTime, endTime){
    const eventContainer = document.getElementById("event-container");
    const startHour = parseInt(startTime.split(":")[0]);
    const startMin = parseInt(startTime.split(":")[1]);
    const endHour = parseInt(endTime.split(":")[0]);
    const endMin = parseInt(endTime.split(":")[1]);
    const thedate = new Date(date);
    
    const height =  ( (endHour * 60 + endMin) - (startHour * 60 + startMin) );
    const column = thedate.getDate() + 1;
    const row = ((startHour * 60 + startMin) - (9 * 60 )) / 15 + 1 ;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${name}`;
    newDiv.setAttribute("class", "slot");
    newDiv.style.height = `${height}px`;
    newDiv.style.gridColumn = column;
    newDiv.style.gridRow = row;
    eventContainer.appendChild(newDiv);

    
}