/* DYNAMICALLY RENDERING EVENTS from the events.js file*/

function getIdArg() {
  const urlArgs = new URLSearchParams(window.location.search);
  return urlArgs.get("id");
}
function renderEventInfo() {
  const id = getIdArg();
  const eventObj = window[id];
  let eventTitle = document.getElementById("event-title");
  if (eventObj.title) {
    eventTitle.innerText = `${eventObj.title}`;
  } else {
    eventTitle.innerText = "Untitled Event";
  }
  if (eventObj.date) {
    let eventDate = document.getElementById("event-date");
    eventDate.innerText = `${eventObj.date}`;
    eventDate.style.display = "block";
  }
  if (eventObj.times) {
    let eventTimeList = document.getElementById("event-time-list");
    for (let i = 0; i < Object.keys(eventObj.times).length; i++)
      eventTimeList.insertAdjacentHTML(
        "beforeend",
        `<li><p>${Object.keys(eventObj.times)[i]} ${
          eventObj.times[i] == undefined ? "" : eventObj.times[i]
        }</p></li>`
      );
    eventTimeList.style.display = "block";
  }
  if (eventObj.location) {
  }
}
function renderCurrentEvent() {
  const currEvent = window[`event${currentEventNumber}`];
  const currEventList = document.getElementById("current-event-list");
  currEventList.insertAdjacentHTML(
    "beforeend",
    `
        <li><a href="event.html?id=event${currentEventNumber}">${currEvent.title}</a></li>
    `
  );
}
function renderPastEvents() {
  for (let i = 1; i < currentEventNumber; i++) {
    let obj = window[`event${i}`];
    const pastEventList = document.getElementById("past-event-list");
    pastEventList.insertAdjacentHTML(
      "beforeend",
      `
        <li><a href="event.html?id=event${i}">${obj.title}</a></li>
    `
    );
  }
}
function renderEventLists() {
  renderCurrentEvent();
  renderPastEvents();
}

window.onload = () => {
  if (window.location.href.includes("event.html?")) {
    renderEventInfo();
  } else if (window.location.href.includes("events.html")) {
    renderEventLists();
  }
};

/* END OF DYNAMIC EVENT RENDERING */
