/* DYNAMICALLY RENDERING EVENTS from the events.js file*/

//looks for an arg called id and returns its value, returns null otherwise
function getIdArg() {
  const urlArgs = new URLSearchParams(window.location.search);
  const id = urlArgs.get("id");
  if (id) return id;
  else return null;
}

//takes the id passed as query param
//uses the corresponding event object from events.js to render
//the event information on the event.html page
function renderEventInfo() {
  const id = getIdArg();
  const eventObj = window[id];
  let eventTitle = document.getElementById("event-title");
  if (eventObj.title) {
    eventTitle.insertAdjacentHTML("beforeend",`${eventObj.title}`);
  } else {
    eventTitle.innerText = "Untitled Event";
  }
  eventTitle.style.display = "block";
  
  if(eventObj.subtitle) {
    const eventSubTitle = document.getElementById("event-subtitle");
    eventSubTitle.insertAdjacentHTML("beforeend", eventObj.subtitle);
  }

  if (eventObj.date) {
    let eventDate = document.getElementById("event-date");
    eventDate.insertAdjacentHTML("beforeend", `<p>${eventObj.date}</p>`);
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
    eventLocation = document.getElementById("event-location");
    eventLocation.insertAdjacentHTML(
      "beforeend",
      `<p>${eventObj.location}</p>`
    );
    eventLocation.style.display = "block";
  }
  if (eventObj.details) {
    let eventDetails = document.getElementById("event-details");

    for (let i = 0; i < Object.keys(eventObj.details).length; i++) {
      let key = Object.keys(eventObj.details)[i];
      eventDetails.insertAdjacentHTML(
        "beforeend",
        `<p>${eventObj.details[key]}</p>`
      );
    }
    eventDetails.style.display = "block";
  }
  if (eventObj.images) {
    let eventImages = document.getElementById("event-images");
    for (let i = 0; i < Object.keys(eventObj.images).length; i++) {
      let key = Object.keys(eventObj.images)[i];
      eventImages.insertAdjacentHTML(
        "beforeend",
        `
        
        <img src="${key}" alt="">
        <p>${eventObj.images[key]}</p>
        `
      );
    }
    eventImages.style.display = "flex";
    eventImages.style.flexWrap = "wrap";
    eventImages.style.justifyContent = "space-evenly";
  }
}

//finds the most recent event (the highest id event) and starts
//pulling events backward by one until the 
//id value should match the global variable currentEventNumber;
//renders that event on the current event list of the events.html page
function renderCurrentEvent() {
    let currEventIndex = totalNumberOfEvents;
    for(let i = 0; i < numberOfEventsThatAreCurrent; i++){
        const currEvent = window[`event${currEventIndex}`];
        const currEventList = document.getElementById("current-event-list");
        currEventList.insertAdjacentHTML(
            "beforeend",
            `
            <li><a href="event.html?id=event${currEventIndex}">${currEvent.title}</a></li>
            `
        );
        currEventIndex--;
    }
  
}

//finds past events (difference between totalNumberOfEvents and eventsThatAreCurrent)
//renders each event as a link to its corresponding event.html?id=eventN page.
function renderPastEvents() {
  for (let i = 1; i <= (totalNumberOfEvents-numberOfEventsThatAreCurrent); i++) {
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
//renders both lists on the events.html page.
function renderEventLists() {
  renderCurrentEvent();
  renderPastEvents();
}

//runs automatically on window load
//if the user clicks on an event,
// this will route them to event.html and render the events information
//if the user is on the events.html page,
// this will render all of the past events and the current event
window.onload = () => {
  if (window.location.href.includes("event.html?")) {
    renderEventInfo();
  } else if (window.location.href.includes("events.html")) {
    renderEventLists();
  }
};

/* END OF DYNAMIC EVENT RENDERING */
