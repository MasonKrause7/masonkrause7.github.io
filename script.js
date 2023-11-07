/* DYNAMICALLY RENDERING EVENTS from the events.js file*/
import {
  getEvent,
  getTotalNumberOfEvents,
  getNumberOfEventsThatAreCurrent,
  getTotalNumberOfGalleries,
  getGallery,
} from "./events.js";

var numberOfPastEventFetches = 0;
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
function renderEventInfo(id) {
  const eventObj = getEvent(id);
  if (id <= 0 || id > getTotalNumberOfEvents) {
    window.location.href = "../events.html";
  }
  if (eventObj.season) {
    let season = document.getElementById("event-season");
    season.insertAdjacentHTML("beforeend", `${eventObj.season}`);
  }
  let eventTitle = document.getElementById("event-title");
  if (eventObj.title) {
    eventTitle.insertAdjacentHTML("beforeend", `${eventObj.title}`);
  } else {
    eventTitle.innerText = "Untitled Event";
  }
  eventTitle.style.display = "block";

  if (eventObj.subtitle) {
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
          eventObj.times[Object.keys(eventObj.times)[i]] == ""
            ? ""
            : `&#x1F80A ${eventObj.times[Object.keys(eventObj.times)[i]]}`
        }</p></li>`
      );
    eventTimeList.style.display = "block";
  }
  if (eventObj.location) {
    let eventLocation = document.getElementById("event-location");
    eventLocation.insertAdjacentHTML(
      "beforeend",
      `<p>${eventObj.location}</p>`
    );
    eventLocation.style.display = "block";
  }
  if (eventObj.details) {
    let eventDetails = document.getElementById("event-details");
    //iterate through the events details and display them
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
function renderCurrentEventList() {
  const id = getIdArg();
  let eventNumber = id.substring(id.indexOf("t") + 1);
  let currEventIndex = getTotalNumberOfEvents();
  for (let i = 0; i < getNumberOfEventsThatAreCurrent(); i++) {
    const currEvent = getEvent(`event${currEventIndex}`);
    const currEventList = document.getElementById("current-event-list");
    if (currEventIndex == eventNumber) {
      currEventList.insertAdjacentHTML(
        "beforeend",
        `<li>${currEvent.season == undefined ? "" : currEvent.season + "<br>"}${
          currEvent.title
        }</li>`
      );
    } else {
      currEventList.insertAdjacentHTML(
        "beforeend",
        `
              <li><a href="events.html?id=event${currEventIndex}">${
          currEvent.season == undefined ? "" : currEvent.season + "<br>"
        }${currEvent.title}</a></li>
              `
      );
    }
    currEventIndex--;
  }
}

function clearPastEventList() {
  const pastEventList = document.getElementById("past-event-list");
  pastEventList.innerHTML = "";
}

//start with the event with startIndex and pulls events backward
function renderSomePastEvents() {
  clearPastEventList();
  const id = getIdArg();
  let eventNumber = id.substring(id.indexOf("t") + 1);

  //numberOfPastEvents represents the starting point to start retreiving events for the pastEventsList
  let numberOfPastEvents =
    getTotalNumberOfEvents() - getNumberOfEventsThatAreCurrent();

  const pastEventList = document.getElementById("past-event-list");

  for (let i = numberOfPastEvents; i > numberOfPastEvents - 3; i--) {
    renderPastEvent(i, eventNumber);
  }
  pastEventList.insertAdjacentHTML(
    "beforeend",
    `<li id="show-more-button-hoverable"><a id="show-more-button">Show more past events...</a></li>`
  );
  const showMoreButton = document.getElementById("show-more-button");
  showMoreButton.addEventListener("click", renderPastEventList);
}

function renderPastEvent(eventID, eventNumber) {
  const pastEventList = document.getElementById("past-event-list");
  let obj = getEvent(`event${eventID}`);
  if (eventNumber == eventID) {
    pastEventList.insertAdjacentHTML(
      "beforeend",
      `<li>${obj.season == undefined ? "" : obj.season + "<br>"}${
        obj.title
      }</li>`
    );
  } else {
    pastEventList.insertAdjacentHTML(
      "beforeend",
      `
          <li><a href="events.html?id=event${eventID}">${
        obj.season == undefined ? "" : obj.season + "<br>"
      }${obj.title}</a></li>
      `
    );
  }
}
//finds past events (difference between totalNumberOfEvents and eventsThatAreCurrent)
//renders each event as a link to its corresponding event.html?id=eventN page.
function renderPastEventList() {
  clearPastEventList();
  const id = getIdArg();
  let eventNumber = id.substring(id.indexOf("t") + 1);
  const pastEventList = document.getElementById("past-event-list");
  //numberOfPastEvents represents the starting point to start retreiving events for the pastEventsList
  let numberOfPastEvents =
    getTotalNumberOfEvents() - getNumberOfEventsThatAreCurrent();

  for (let i = numberOfPastEvents; i >= 1; i--) {
    renderPastEvent(i, eventNumber);
  }
  pastEventList.insertAdjacentHTML(
    "beforeend",
    `<li id="show-less-button-hoverable"><a id="show-less-button">Show less...</a></li>`
  );
  const showLessButton = document.getElementById("show-less-button");
  showLessButton.addEventListener("click", renderSomePastEvents);
}

//renders both lists on the events.html page.
function renderEventLists() {
  renderCurrentEventList();
  renderSomePastEvents();
}
function renderMostRecentEvent() {
  window.location.href = `events.html?id=event${getTotalNumberOfEvents()}`;
}
//runs automatically on window load
//if the user clicks on an event,
// this will route them to event.html and render the events information
//if the user is on the events.html page,
// this will render all of the past events and the current event
window.onload = () => {
  if (window.location.href.includes("events.html?")) {
    const eventId = getIdArg();
    renderEventInfo(eventId);
    renderEventLists();
  } else if (window.location.href.includes("events.html")) {
    renderMostRecentEvent();
  } else if (window.location.href.includes("gallery.html?")) {
    //render gallery with id from query param
    const galleryID = getIdArg();
    renderSpecificGallery(galleryID);
    renderGalleryList();
  } else if (window.location.href.includes("gallery.html")) {
    renderMostRecentGallery();
  }
};
/* END OF DYNAMIC EVENT RENDERING */
/* BEGIN DYNAMIC GALLERY RENDERING */

function renderMostRecentGallery() {
  window.location.href = `gallery.html?id=gallery${getTotalNumberOfGalleries()}`;
}
function renderGalleryList() {
  const galId = getIdArg();
  let id = galId.substring(galId.indexOf("y") + 1);
  const otherGalList = document.getElementById("gallery-list");
  for (let i = getTotalNumberOfGalleries(); i >= 1; i--) {
    if (i != id) {
      otherGalList.insertAdjacentHTML(
        "beforebegin",
        `<li><a href="gallery.html?id=gallery${i}">${
          getGallery(`gallery${i}`).title
        }</a></li>`
      );
    } else {
      otherGalList.insertAdjacentHTML(
        "beforebegin",
        `<li>${getGallery(`gallery${i}`).title}</li>`
      );
    }
  }
}
function renderSpecificGallery(id) {
  let galObj = getGallery(id);
  const title = document.getElementById("displayed-gallery-title");
  title.insertAdjacentHTML("beforeend", `${galObj.title}`);
  const subtitle = document.getElementById("displayed-gallery-subtitle");
  subtitle.insertAdjacentHTML("beforeend", `${galObj.subtitle}`);
  const imageList = document.getElementById("displayed-gallery-images");
  for (let i = 0; i < Object.keys(galObj.images).length; i++) {
    imageList.insertAdjacentHTML(
      "beforeend",
      `<li><img src="${Object.keys(galObj.images)[i]}" alt="${
        galObj.images[Object.keys(galObj.images)[i]]
      }"></li>`
    );
  }
}

/* END OF DYNAMIC GALLERY RENDERING */
