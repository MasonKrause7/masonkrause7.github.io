/*The eventList has properties for each event that the society has had. Each of these has its own properties that are the event details. */
/*To add an event, simply copy the template at the end of the eventList, increment the event_ to the proper ID, fill in the event data, 
and then increment the totalNumberOfEvents variable declared directly below the eventList */
/* The totalNumberOfEvents variable should be the equal to the last event_ number in the eventList. */
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
      //image-url : alt
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
    date: "Thursday, February 17, 2011",
    times: {
      "7:00 PM": "",
    },
    location: "F.G. Woodward Library",
    details: {
      description:
        "A reception to honor the scholarly and creative achievements of APSU faculty, staff, and students.",
      note: "An exhibit of scholarly creations will be on the 2nd (main) floor of Woodward Library from Feb. 17 through March 5.",
    },
    primaryPhoto: "images/library-front-sculpture.jpg",
    images: {
      "images/woodwardlibrary-sideshot.jpeg": "Woodward Library Sideshot",
      "images/apsu-multicolor-logo.jpg": "Apsu Multicolor Logo",
    },
  },
  event8: {
    title: "The Society Social",
    subtitle: "An Evening with Dr. Gregg Steinberg",
    season: "2011 Spring Program",
    date: "Tuesday, March 29, 2011",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Dinner",
      "7:15 PM": "Program",
    },
    location: "F&M Bank, Franklin Room, 50 Franklin St., Clarksville",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      notes: "Refreshments, wine, and punch will be served. Business casual.",
      price: "No charge for Society members.",
      RSVP: "RSVP by August 7 to 931-221-7618.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event9: {
    title: '"Creating Public Art"',
    subtitle: "By Gregg Schlanger, M.F.A., Professor of Art",
    season: "2011 Summer Program",
    date: "Tuesday, June 21, 2011",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "6:30 PM": "Wine, punch & hors d'oeuvres reception.",
    },
    location:
      "Residence of Mr. & Mrs. Larry Martin, 1983 Craigmont Blvd., Clarksville",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      RSVP: "RSVP by June 15 to 931-221-7222",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  // TEMPLATE - COPY, PASTE, INCREMENT eventID by one and replace _, fill in values.
  event10: {
    title: '"The Curious Case of the Tolerant Biggot"',
    subtitle: "By President Tim Hall",
    season: "2011 Fall Event",
    date: "Monday, October 3, 2011",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Wine, punch & hors d'oeuvres reception",
    },
    location:
      "Residence of Mr. & Mrs. Larry Martin, 1983 Craigmont Blvd., Clarksville",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Notes: "Membership drive! Please bring a friend.",
      RSVP: "RSVP by September 28 to 931-221-7618.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  // TEMPLATE - COPY, PASTE, INCREMENT eventID by one and replace _, fill in values.
  event11: {
    title: "An Evening with Stephanie Osborn",
    subtitle:
      "Science fiction writer, former rocket scientist (really!), and APSU alum",
    season: "2012 Winter Program",
    date: "Thursday, January 26, 2012",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "Hot cider and hors d'oeuvres reception.",
    },
    location:
      'APSU Environmental Education Center aka "The Farm" - 1991 Pickens Rd., Clarksville',
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Notes: "Tours of the APSU Observatory.",
      RSVP: "RSVP by January 20 to 931-221-7618.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  /* TEMPLATE - COPY, PASTE, INCREMENT eventID by one and replace _, fill in values.
  event_: {
    title: "",
    subtitle: "",
    season: "",
    date: "",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "": "",
      
    },
    location: "",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      "" : "",

    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "" : "",
      
    }
  },*/
};
//totalNumberOfEvents should match the greatest event_ number in the eventList object.
//this allows for quick rendering of event list instead of checking for greatest id in eventList
const totalNumberOfEvents = 11;

//numberOfEventsThatAreCurrent controls how many events will be shown in the "current" section of event list
//the rest of the events will be shown in the past events list
const numberOfEventsThatAreCurrent = 1;

//getters for event rendering
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

let galleryList = {
  gallery1: {
    title: "Dinner on the River: An Evening with Michael Shoulders",
    subtitle: "",
    images: {
      //<img url> : <img alt attribute>
      "/images/galleries/dinnerontheriver/WS001.jpg":
        "Water Street Event Center front entrance sign",
      "/images/galleries/dinnerontheriver/WS005.jpg": "Entry table",
      "/images/galleries/dinnerontheriver/WS013.jpg":
        "Wine bottle on entry table",
      "/images/galleries/dinnerontheriver/WS015.jpg":
        "Woodward Library Society program with dining set",
      "/images/galleries/dinnerontheriver/WS016.jpg":
        "Wide view of the tables with dining sets layed out",
      "/images/galleries/dinnerontheriver/WS017.jpg":
        "Michael Shoulders with society member",
      "/images/galleries/dinnerontheriver/WS018.jpg":
        "Books on entry way table",
      "/images/galleries/dinnerontheriver/WS022.jpg":
        "Society members gathered around a table",
      "/images/galleries/dinnerontheriver/WS029.jpg": "Three society members",
      "/images/galleries/dinnerontheriver/WS030.jpg": "Society member",
      "/images/galleries/dinnerontheriver/WS033.jpg":
        "Society members chatting",
      "/images/galleries/dinnerontheriver/WS034.jpg":
        "Society members chatting",
      "/images/galleries/dinnerontheriver/WS035.jpg":
        "Society members seated at their dining table",
      "/images/galleries/dinnerontheriver/WS037.jpg":
        "Society members chatting",
      "/images/galleries/dinnerontheriver/WS040.jpg":
        "Society members chatting",
      "/images/galleries/dinnerontheriver/WS041.jpg":
        "Violinist performing a musical number",
      "/images/galleries/dinnerontheriver/WS042.jpg":
        "Society members gathered after the program",
      "/images/galleries/dinnerontheriver/WS044.jpg": "Society member",
      "/images/galleries/dinnerontheriver/WS045.jpg": "Society members",
      "/images/galleries/dinnerontheriver/WS048.jpg":
        "Society members chatting",
      "/images/galleries/dinnerontheriver/WS051.jpg":
        "Wide view of all society members at their dining tables",
      "/images/galleries/dinnerontheriver/WS053.jpg":
        "Michael Shoulders seated with guest",
      "/images/galleries/dinnerontheriver/WS055.jpg": "Society members",
      "/images/galleries/dinnerontheriver/WS059.jpg": "Society members",
      "/images/galleries/dinnerontheriver/WS060.jpg": "Society members",
      "/images/galleries/dinnerontheriver/WS061.jpg": "Society members",
      "/images/galleries/dinnerontheriver/WS062.jpg": "Society members",
      "/images/galleries/dinnerontheriver/WS064.jpg": "Society members",
      "/images/galleries/dinnerontheriver/WS068.jpg":
        "Wide view of society speaker and members",
      "/images/galleries/dinnerontheriver/WS070.jpg":
        "Wide view of society speaker and members",
      "/images/galleries/dinnerontheriver/WS083.jpg":
        "Society speakers presenting awards",
      "/images/galleries/dinnerontheriver/WS086.jpg":
        "Society speakers drawing raffle ticket",
    },
  },
  gallery2: {
    title:
      "Woodward Library Society Fall 2012 Program:<br>The Politics of Memory: Archives, Historic Preservation, and Lessons of the Past",
    subtitle: "by Dr. Susan Curtis, Purdue University<br>October 18, 2012",
    images: {
      "images/galleries/politicsofmemory/PoliticsOfMemory1.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory2.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory6.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory7.jpg": "",

      "images/galleries/politicsofmemory/PoliticsOfMemory4.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory5.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory8.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory9.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory10.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory11.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory12.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory13.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory14.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory15.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory16.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory17.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory18.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory19.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory20.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory21.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory22.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory23.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory24.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory25.jpg": "",
    },
  },
  gallery3: {
    title:
      "Woodward Library Society 2013 Spring Social: Enter Laughing (But Quietly Please!): Amusing Anecdotes from a Life in Libraries",
    subtitle:
      "Featuring Dr. Joe Trahern, Professor Emeritus of English, University of Tennessee April 16, 2013",
    images: {
      "/images/galleries/spring2013/spring2013_photo1.jpg":
        "Society member at podium",
      "/images/galleries/spring2013/spring2013_photo2.jpg":
        "Society members hugging after a donation",
      "/images/galleries/spring2013/spring2013_photo3.jpg":
        "Society members talking",
      "/images/galleries/spring2013/spring2013_photo4.jpg":
        "Society members hugging",
      "/images/galleries/spring2013/spring2013_photo5.jpg": "Society speaker",
      "/images/galleries/spring2013/spring2013_photo6.jpg": "Society speakers",
      "/images/galleries/spring2013/spring2013_photo7.jpg":
        "Society speaker at podium",
      "/images/galleries/spring2013/spring2013_photo8.jpg":
        "Society speaker at podium",
      "/images/galleries/spring2013/spring2013_photo9.jpg":
        "Wide view of society members and attendees in their seats",
      "/images/galleries/spring2013/spring2013_photo10.jpg":
        "Wide view of society members and attendees in their seats",
      "/images/galleries/spring2013/spring2013_photo11.jpg":
        "Society speakers preparing plaque at podium",
      "/images/galleries/spring2013/spring2013_photo12.jpg":
        "Society speakers laughing while preparing plaque at podium",
      "/images/galleries/spring2013/spring2013_photo13.jpg":
        "Society speakers presenting plaque at podium",
      "/images/galleries/spring2013/spring2013_photo14.jpg":
        "Society members presenting a giant check for 13,121 dollars",
    },
  },
  //gallery3: {},
};
let totalNumberOfGalleries = 3;
//getters for galleries
export function getGallery(galleryID) {
  return galleryList[galleryID];
}
export function getTotalNumberOfGalleries() {
  return totalNumberOfGalleries;
}
