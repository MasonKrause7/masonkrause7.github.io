/* DYNAMICALLY RENDERING EVENTS from the events.js file*/
import {
  getEvent,
  getTotalNumberOfEvents,
  getNumberOfEventsThatAreCurrent,
  getTotalNumberOfGalleries,
  getGallery,
} from "./events.js";

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
  } else if (window.location.href.includes("newsletter.html?")) {
    setNewsletterSeason();
  } else if (window.location.href.includes("newsletter.html")) {
    let currentSeason = "Fall2022";
    window.location.href = `newsletter.html?season=${currentSeason}`;
  }
};

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

  if (eventObj.primaryPhoto) {
    const eventPrimaryPhoto = document.getElementById("pri-photo");
    eventPrimaryPhoto.setAttribute("src", eventObj.primaryPhoto);
    const eventPhotoLink = document.getElementById("pri-photo-link");
    eventPhotoLink.setAttribute("href", eventObj.primaryPhoto);
  }

  if (eventObj.date) {
    let eventDate = document.getElementById("event-date");
    eventDate.insertAdjacentHTML("beforeend", `<p>${eventObj.date}</p>`);
    eventDate.style.display = "block";
  } else {
    const eventDate = document.getElementById("event-date");
    const eventDateHeader = document.getElementById("event-date-header");
    eventDateHeader.style.display = "none";
  }
  if (Object.keys(eventObj.times)[0]) {
    let eventTimeList = document.getElementById("event-time-list");
    for (let i = 0; i < Object.keys(eventObj.times).length; i++)
      eventTimeList.insertAdjacentHTML(
        "beforeend",
        `<li><p>${Object.keys(eventObj.times)[i]} ${
          eventObj.times[Object.keys(eventObj.times)[i]] == ""
            ? ""
            : `-> ${eventObj.times[Object.keys(eventObj.times)[i]]}`
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
  } else {
    const locationHeader = document.getElementById("event-location-header");
    locationHeader.style.display = "none";
  }
  if (Object.keys(eventObj.details)[0]) {
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
  } else {
    const detailsHeaders = document.getElementById("details-header");
    detailsHeaders.style.display = "none";
  }
  if (Object.keys(eventObj.primaryPhoto)) {
    if (eventObj.primaryPhoto) {
    } else {
      document.getElementById("pri-photo-link").style.display = "none";
      document.getElementById("event-attributes").style.width = "100%";
    }
  }

  if (Object.keys(eventObj.images)[0]) {
    let eventImages = document.getElementById("event-images");
    for (let i = 0; i < Object.keys(eventObj.images).length; i++) {
      let key = Object.keys(eventObj.images)[i];
      eventImages.insertAdjacentHTML(
        "beforeend",
        `
        <a class="eventImageLink" href="${key}">
        <img class="eventImage" src="${key}" alt="${eventObj.images[key]}">
        </a>
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
  const currEventList = document.getElementById("current-event-list");
  if (getNumberOfEventsThatAreCurrent() == 0) {
    currEventList.insertAdjacentHTML(
      "beforeend",
      `<li>No current events right now...<br>Check back soon!</li>`
    );
  } else if (getNumberOfEventsThatAreCurrent() == 1) {
    const currListTitle = document.getElementById("current-event-list-title");
    currListTitle.innerText = "Current Event";
  }
  for (let i = 0; i < getNumberOfEventsThatAreCurrent(); i++) {
    const currEvent = getEvent(`event${currEventIndex}`);

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

  const numberOfPastEventsToBeListed = 6;
  for (
    let i = numberOfPastEvents;
    i > numberOfPastEvents - numberOfPastEventsToBeListed;
    i--
  ) {
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
      `<li><a href="${Object.keys(galObj.images)[i]}"><img src="${
        Object.keys(galObj.images)[i]
      }" alt="${galObj.images[Object.keys(galObj.images)[i]]}"></a></li>`
    );
  }
}

/* END OF DYNAMIC GALLERY RENDERING */
/* Newsletter rendering */
function setNewsletterSeason() {
  const urlArgs = new URLSearchParams(window.location.search);
  const season = urlArgs.get("season");
  if (season) {
    const frame = document.getElementById("newsletter-iframe");
    console.log(`./images/newsletters/WLSNewsletter-${season}.pdf`);
    frame.setAttribute(
      "src",
      `./images/newsletters/WLSNewsletter-${season}.pdf`
    );
  }
}
