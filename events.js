const totalNumberOfEvents = 7;
const numberOfEventsThatAreCurrent = 2;

let eventList = {
  event1: {
    title: "Dinner on the River: An Evening with Michael Shoulders",
    season: "2009 Inaugural Event",
    date: "April 17, 2009",
    times: {
      "11:30 AM - 2:00 PM": "",
    },
    location: "Morgan University Center",
    details: {
      postEventThanks: `Great thanks to those who joined us for the inaugural social event of The Woodward Library Society, Dinner on the River: An Evening with Michael Shoulders.`,
      description: `The dinner is open to everyone, regardless of whether or not you are a member of the Society.`,
      speakerDescription: `Mr. Shoulders is a Clarksville resident, a much sought after speaker, and a nationally known author of children's books, including V is for Volunteer and Count on Us: A Tennessee Number Book.
          Five of Mr. Shoulders' books signed by the author will be given away as door prizes.`,
      moreInfo: `For more information, please contact the Library Director's office at 931-221-7618.
          Pictures from this event can be found in the <a href="gallery.html">Gallery</a>. You can also read <a href="https://www.theleafchronicle.com/article/20090501/COMMUNITY/905010315/1086/Woodward+Library+Society+benefits+APSU+campus+library">The Leaf Chronicle Article</a> about this event.`,
    },
    images: {
      //image-url : image-caption
    },
  },
  event2: {
    title: "TEL: Tennessee Electronic Library",
    season: "2009 Fall Event",
    date: "Tuesday, September 15, 2009",
    times: {
      "5:30 PM": "",
    },
    location: "F&M Bank, Franklin Room, 50 Franklin Street, Clarksville",
    details: {
      description: `A description and demonstration of the resources that make up TEL: Tennessee Electronic Library, a vast array of online resources made available free of charge to the citizens of Tennessee by the Tennessee State Library & Archives.
        A reception with hors d'oeuvres and beverages will precede the program, along with a ceremony to celebrate the Society's first donation to the Woodward Library.
        This event is sponsored by the Woodward Library Society of Austin Peay State University and F&M Bank, and is free of charge for all Woodward Library Society members and prospective members.`,
    },
    images: {},
  },
  event3: {
    title: '"The Magic of Poetry, the Poetry of Magic" by Malcolm Glass',
    season: "2010 Winter Program",
    date: "Sunday, March 21, 2010",
    times: {
      "2:00-4:00 PM": "",
    },
    location: "Trahern Theatre, Austin Peay State University",
    details: {
      description: `Refreshments and fellowship following the program.`,
      RSVP: `Please RSVP by March 18, 2010 to 931-221-7222.`,
      note: `This event is for members only. Please see the memberships page for a description of members benefits.`,
    },
    images: {},
  },
  event4: {
    title: "<i>The Society Social</i>, An Evening with Wade Bourne",
    subtitle: "Clarksville's own free-lance outdoor writer and broadcaster",
    season: "2010 Spring Program",
    date: "Thursday, April 22, 2010",
    times: {
      "5:30 - 7:00 PM": "Moveable Feast",
      "7:00 PM": "Program",
    },
    location:
      "Customs House Museum and Cultural Center <br> 200 South Second St., Clarksville, TN",
    details: {
      price:
        "$30 per person for members of the Woodward Library Society.<br>$40 per person for non-members.",
      RSVP: "Attendance is limited, please RSVP to 931-221-7222 before Wednesday, April 14, 2010.",
    },
    images: {},
  },
  event5: {
    title: '"A Taste of Italia"',
    subtitle: "featuring Matthew Frank, author of <i>Barolo</i>",
    season: "2010 Summer Program",
    date: "Thursday, July 29, 2010",
    times: {
      "6:00 PM": "Social Hour",
      "7:00 PM": "Speaker",
    },
    location: "F&M Bank, Franklin Room<br>50 Franklin St., Clarksville",
    details: {
      description: "Wine, antipasto and dolce!",
      price: "Complimentary to members, $20 for non-members.",
      RSVP: "Reservation required, limited seating. Call 931-221-7618 to reserve your seat.",
    },
  },
  event6: {
    title: '"Visiting Writers Series: Richard Bausch"',
    subtitle:
      "Reading from his short story collection, <i>Something Is Out There</i><br>In conjunction with the Center of Excellence for the Creative Arts and <i>Zone 3</i>",
    season: "2010 Fall Program",
    date: "Thursday, October 28, 2010",
    times: {
      "7:00-7:45 PM": "Dessert Reception",
      "8:00 PM": "Program commencement",
    },
    location:
      "Dessert Reception will be held at the F.G. Woodward Library.<br>Program will be held at the Morgan University Center, room 303.",
    details: {
      note: "<strong>Reception for Sponsor and Benefactor level members</strong>($500 and up)",
      receptionNotes:
        "Hosted by President Tim & Mrs. Lee Nicholson Hall<br>5:00-6:30 PM, Thursday, November 11, 2010<br>APSU Pace Alumni Center at Emerald Hills",
    },
  },
  event7: {
    title: '"A Celebration of Scholarship"',
    subtitle: "Creative and Scholarly Achievements at Austin Peay",
    season: "2011 Winter Program",
    date: "Thursday, 17 February, 2011",
    times: {
      "7:00 PM": "",
    },
    location: "F.G. Woodward Library",
    details: {
      description:
        "A reception to honor the scholarly and creative achievements of APSU faculty, staff, and students.",
      note: "An exhibit of scholarly creations will be on the 2nd (main) floor of Woodward Library from Feb. 17 through March 5.",
    },
  },
};
export function getEvent(eventID) {
  return eventList[eventID];
}
export function getTotalNumberOfEvents() {
  return totalNumberOfEvents;
}
export function getNumberOfEventsThatAreCurrent() {
  return numberOfEventsThatAreCurrent;
}

/* END OF EVENTS */
/* START OF GALLERIES */

let totalNumberOfGalleries = 2;
let galleryList = {
  gallery1: {
    title:
      'Woodward Library Society Fall 2012 Program: "The Politics of Memory: Archives, Historic Preservation, and Lessons of the Past,"',
    subtitle: "by Dr. Susan Curtis, Purdue University, October 18, 2012",
    images: {
      //<img url> : <img alt attribute>
      "/images/hashtagGovs.jpeg": "Random img",
      "/images/libraryfront1.jpg": "",
    },
  },
  gallery2: {
    title:
      "Woodward Library Society 2013 Spring Social: Enter Laughing (But Quietly Please!): Amusing Anecdotes from a Life in Libraries",
    subtitle:
      "Featuring Dr. Joe Trahern, Professor Emeritus of English, University of Tennessee April 16, 2013",
    images: {
      "/images/woodwardlibrary-sideshot.jpeg":
        "Side shot of Woodward Library Society",
      "/images/apsu-multicolor-logo.jpg": "Multicolor logo",
      "/images/library-front-sculpture.jpg": "Library front sculpture",
    },
  },
};

export function getGallery(galleryID) {
  return galleryList[galleryID];
}
export function getTotalNumberOfGalleries() {
  return totalNumberOfGalleries;
}
