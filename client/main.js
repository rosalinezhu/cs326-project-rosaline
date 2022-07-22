import {events} from './events.js';

const eventName = document.getElementById("eventname");
const eventDate = document.getElementById("date");
const start = document.getElementById("starttime");
const end = document.getElementById("endtime");
const create = document.getElementById("create");


create.addEventListener("click", function(){addEvent(eventDate.value, start.value, end.value, eventName.value)});

function addEvent(date, startTime, endTime, event){
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
    newDiv.innerHTML = `${event}`;
    newDiv.setAttribute("class", "slot");
    newDiv.style.height = `${height}px`;
    newDiv.style.gridColumn = column;
    newDiv.style.gridRow = row;

    events.saveEvent(date, startTime, endTime, event);

    newDiv.addEventListener("click", function(){addPopUp(newDiv)});
    eventContainer.appendChild(newDiv);

}

// function addPopUp(element){
//     element.innerHTML = '';
//     const newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "popup");
//     openPopup(newDiv);
//     const trash = document.createElement("INPUT");
//     trash.setAttribute("type", "button");
//     trash.setAttribute("class", "trash");
//     trash.setAttribute("value", "Delete Event");
//     trash.setAttribute("click", function(){deleteEvent(element)});
//     newDiv.appendChild(trash);
    
// }
// function openPopup(popup){
//     popup.classList.add("open-popup");
// }

// function closePopup(popup){
//     popup.classList.remove("open-popup");
// }

// function deleteEvent(element){
//     closePopup(element);
//     element.parentNode.removeChild(element);
// }