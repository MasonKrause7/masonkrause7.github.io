/*
This file serves as the database of events and galleries to allow dynamic rendering and updating.
Two lists are exported from this file to script.js, they are: eventList and galleryList.
Each of these lists has properties for each instance of event and gallery that have occured. 
Each instance has its own properties, such as title, date, images, etc.
There are templates at the end of each list that model the properties an instance can have. 
  Simply copy and paste the template, uncomment, increment the _ to represent the instance id, increment the totalNumberOf variable for the list, add instance data.
  If you do not wish to include a property from the template for your instance, leave it as an empty string or empty dictionary 
     Do Not delete a property from the template altogether or it will not render properly, again, leave it as an empty string
     Example: event1: title: "", images: {} <- this keeps the properties but with no value, as it should be
     Removing the title: "" altogether, or any of the other properties from the template will cause an error when the event renders
*/

/*To add an event, simply copy the template at the end of the eventList, 
increment the event_ to the proper ID, 
fill in the event data, 
and then increment the totalNumberOfEvents variable by 1 to match the event_ */
/* The totalNumberOfEvents variable should be the equal to the last event_ number in the eventList. */
/*If the new event does not have a certain property that is in the template, still include the property declaration but leave its fields blank. e.g event1: { details: {} }*/
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
          Pictures from this event can be found in the <a href="gallery.html">Gallery</a>.`,
    },
    primaryPhoto: "",
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
    primaryPhoto: "",
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
    primaryPhoto: "",
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
    primaryPhoto: "",
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
    primaryPhoto: "",
    images: {},
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
    primaryPhoto: "",
    images: {},
  },

  event7: {
    title: "<i>A Celebration of Scholarship</i>",
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
    primaryPhoto: "",
    images: {},
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
  event12: {
    title: "Smoke: The Tennessee-Kentucky Tobacco Wars",
    subtitle:
      "with David Alford<br>Author, composer, actor, director and producer",
    season: "2012 Spring Society Social",
    date: "Tuesday, March 20, 2012",
    times: {
      "5:30-8:30 PM": "",
      "5:30 PM": "Social Hour",
      "6:30 PM": "Dinner",
      "7:30 PM": "Entertainment",
    },
    location: "F&M Bank, Franklin Room<br>50 Franklin St., Clarksville",
    details: {
      Price:
        "$45 each for Society members; $55 for non-members<br>Call 931-221-7618 to purchase tickets",
      RSVP: "RSVP by March 15 to 931-221-7618",
    },
    primaryPhoto: "",
    images: {
      "": "",
    },
  },
  event13: {
    title: "Dinner at the Library with Barry Kitterman",
    subtitle: "Professor of Creative Writing at Austin Peay",
    season: "2012 Summer Program",
    date: "Tuesday, August 14, 2012",
    times: {
      "5:30-8:30 PM": "",
      "5:30": "Reception",
      "6:45": "Dinner and Reading",
    },
    location:
      "Reception: Archwood<br>Dinner and Presentation: Woodward Library",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Price: "$15 per person to help offset the cost of the dinner.",
      RSVP: "Call 931-221-7618 RSVP and purchase tickets by August 8.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event14: {
    title: '"Lester A. Walton"',
    subtitle:
      "with Dr. Susan Curtis<br>Professor of History at Purdue University",
    season: "2012 Fall Program I",
    date: "Wednesday, October 17, 2012",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "3:00 PM": "",
    },
    location: "APSU Honors Commons (Memorial Health Building)",
    details: {},
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event15: {
    title:
      '"The Politics of Memory: Archives, Historic Preservation, and Lessons of the Past"',
    subtitle:
      "with Dr. Susan Curtis<br>Professor of History at Purdue University",
    season: "2012 Fall Program II",
    date: "Thursday, October 18, 2012",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30-6:30 PM":
        "Members Reception held in the Wilbur N. Daniel African American Cultural Center from 5:30-6:30 PM.",
      "7:00 PM": "Event start in the Morgan University Center.",
    },
    location: "APSU Morgan University Center Ballroom B/C.",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      RSVP: "RSVP by October 12 to 931-221-7618",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event16: {
    title: "<i>A Celebration of Scholarship</i>",
    subtitle:
      "Spotlighting the scholarly and creative accomplishments of Austin Peay's faculty, staff, and students",
    season: "2013 Winter Program",
    date: "Thursday, February 21, 2013",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "7:00 PM": "",
    },
    location: "Felix G. Woodward Library",
    details: {},
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event17: {
    title: "Enter Laughing (But Quietly, Please!)",
    subtitle: "Amusing Anecdotes from a Life in Libraries",
    season: "2013 Spring Society Social",
    date: "Tuesday, April 16, 2013",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Dinner",
      "7:30 PM": "Program",
    },
    location: "F&M Bank, Franklin Room",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      dinner:
        "Choice of three dinner entrees: chicken cordon bleu, grilled lamb chops, or vegetarian.",
      RSVP: "Limited seating; please RSVP to 931-221-7618 before April 8.",
      Price:
        "$45 for Woodward Library Society Members<br>$55 for non-members<br>**Some members may not have to pay because of their membership level; please call 931-221-7618 for details.",
      Gallery:
        'The gallery for this event can be viewed <a href="gallery.html?id=gallery3">here</a>.',
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event18: {
    title: "Picnic on the Patio with Dr. John Butler",
    subtitle: "Talking about his new book on the Model T",
    season: "2013 Summer Program",
    date: "Monday, August 12, 2013",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "",
    },
    location: "Pace Alumni Center, APSU",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description: "Picnic dinner, dessert, soft drinks & wine.",
      RSVP: "RSVP to 931-221-7618 by August 7.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event19: {
    title: '"Paper Art Engineering"',
    subtitle: "with Kell Black",
    season: "2013 Fall Program",
    date: "Tuesday, October 29, 2013",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "",
    },
    location: "Woodward Library, room 232",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      RSVP: "RSVP to 931-221-7618",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event20: {
    title:
      '"Tennessee Literary Luminaries: From Cormac McCarthy to Robert Penn Warren"',
    subtitle: "by Sue Freeman Culverhouse",
    season: "2014 Winter Program",
    date: "March 20, 2014",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "Refreshments",
      "5:30 PM": "Speaker",
      "Immediatly Afterwards": "Book signing",
    },
    location: "Felix G. Woodward Library, room 232",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      RSVP: "Please RSVP by March 18 to 931-221-7618.",
    },
    primaryPhoto: "./images/events/2014WinterProgram-PrimaryImage.jpg",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event21: {
    title: "<i>The Performing Life: A Singer's Guide to Survival</i>",
    subtitle: "featuring Dr. Sharon Mabry",
    season: "2014 Spring Society Social",
    date: "Monday, April 21, 2014",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Dinner",
      "7:30 PM": "Program",
    },
    location: "F&M Bank, Franklin Room<br>Franklin St., Clarksville, TN",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Notes:
        "The program will include a raffle for concert tickets, CDs, and Dr. Mabry's book.<br>Raffle tickets will be sold at the event.",
      Price: "$45 for society members; $65 for non-members.",
      RSVP: "Seating is limited, please RSVP by April 12. Call 931-221-7618 for details.",
    },
    primaryPhoto: "./images/events/2014SpringProgram-PrimaryImage.jpg",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event22: {
    title: "Meet Dr. Alisa White",
    subtitle: "the 10th President of APSU",
    season: "2014 Summer Program",
    date: "Tuesday, August 12, 2014",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "",
    },
    location: "Pace Alumni Center at Emerald Hill, APSU",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "Refreshments, wine & punch will be served.<br>Business casual.",
      Price: "No charge for Society members.",
      RSVP: "RSVP by August 7 to 931-221-7618.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event23: {
    title: "<i>The Diary of Nannie Haskins Williams</i>",
    subtitle:
      "A Southern Woman's Story of Rebellion and Reconstruction, 1863-1890. With co-editors Minoa Uffelman, Ellen Kanervo, Phyllis Smith, & Eleanor Williams",
    season: "2014 Fall Program",
    date: "November 3, 2014",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "Refreshments",
      "5:30 PM": "Presentation",
    },
    location: "Governors Stadium, Club Level (3rd Floor)",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      "": "",
    },
    primaryPhoto: "./images/events/2014FallProgram-PrimaryImage.jpg",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event24: {
    title: "<i>A Celebration of Scholarship</i>",
    subtitle:
      "Spotlighting the scholarly and creative accomplishments of Austin Peay's faculty, staff, and students.",
    season: "2015 Winter Program",
    date: "February 2015, specific date and time to be announced",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "": "",
    },
    location: "Felix G. Woodward Library",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      "": "",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event25: {
    title: "Inner Vision: Where Insight Sets the Scene",
    subtitle:
      "David Meador<br>Author, motivational speaker, businessman, and blind golf champion",
    season: "2015 Spring Society Social",
    date: "Monday, April 27, 2015",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Dinner",
      "7:30 PM": "Program",
    },
    location: "F&M Bank, Franklin Room<br>50 Franklin Street, Clarksville, TN",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      "Dress Code": "Business Casual",
      Price:
        "$50 for Woodward Library Society members<br>(Patron, Sponsor, & Benefactor level members have tickets as a result of their membership; please call 931-221-7618)<br>$65 for non-members",
      RSVP: "Call 931-221-7618 for dinner tickets",
      Raffle:
        "Raffle tickets for golf prizes donated by local golf courses will be sold at the dinner.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "./images/events/2015SpringProgram-Image1.jpg":
        "David Meadors book cover 'Broken eyes, unbroken spirit.'",
      "./images/events/2015SpringProgram-Image2.jpg": "David Meador golfing",
    },
  },

  event26: {
    title: "<i>Divided: Mary Lincoln & Emilie Todd Helm</i>",
    subtitle:
      "A dramatic reading featuring the author, Valerie Gugala, as Mary Todd Lincoln, and Ms. Gugala's half-sister, Sara Resler, as Mrs. Lincoln's half-sister, Emilie Todd Helm",
    season: "2015 Fall Program",
    date: "Saturday, September 12, 2015",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "7:00 PM": "",
    },
    location: "Trahern Theatre, APSU",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "This program is in conjunction with the traveling exhibition titled “Lincoln: The Constitution and the Civil War,” to be hosted by Woodward Library Sept. 8–Oct. 15. The exhibition is in honor of the sesquicentennial of the Civil War and is sponsored by the National Endowment for the Humanities, the American Library Association, and the National Constitution Center.",
      Price: "The exhibition is free and open to the public",
    },
    primaryPhoto: "./images/events/2015FallProgram-PrimaryImage.png",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event27: {
    title: "Lost on a Mountain in Maine",
    subtitle:
      "featuring Donn fendler, author of this true story, soon to be released as a motion picture.",
    season: "2016 Winter Program",
    date: "Thursday, January 28, 2016",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Gathering: hors d'oeuvres & beverages.",
      "6:15 PM": "Presentation and Q&A.",
    },
    location: "APSU Football Stadium, Club Level",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      RSVP: "No RSVP necessary. We look forward to seeing you there!",
    },
    primaryPhoto: "./images/events/2016WinterProgram-PrimaryImage.jpg",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event28: {
    title: "Feeding a World of Nine Billion",
    subtitle: "Dr. Amy Wright & Dr. Donald Sudbrink",
    season: "2016 Spring Social",
    date: "Saturday, April 30, 2016",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Dinner",
      "7:30 PM": "Program",
    },
    location: "F&M Bank, Franklin Room<br>50 Franklin St., Clarksville, TN",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Price:
        "$50 for Woodward Library Society members.<br>(Patron, Sponsor, and Benefactor level members have tickets as a result of their membership; please call 931-221-7618 for confirmation).<br> $65 for non members.",
      RSVP: "Call 931-221-7618 for tickets.",
      DressCode: "Business Casual",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event29: {
    title: "<i>Sharkespeare and the First Folio</i>",
    subtitle: "by Dr. Mickey Wadia",
    season: "2016 Fall Program",
    date: "Wednesday, November 9, 2016",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Light Refreshments",
      "6:00 PM": "Sharkespeare and the First Folio",
      "7:00 PM": "Roxy Regional Theatre's Production of <i>Henry V</i>",
    },
    location: "Roxy Regional Theatre<br>100 Franklin St., Clarksville, TN",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Price:
        "Reception and program are free. If you wish to stay for <i>Henry V</i>, discounted tickets are available for $15 per person. Purchase tickets through the box office by calling 931-645-7699 or in person. Let them know you are with the Woodward Library Society.",
      RSVP: "RSVP to Teresa Beyke at 931-7618 by Friday, November 4, 2016",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event30: {
    title: "<i>A Celebration of Scholarship</i>",
    subtitle:
      "Spotlighting the scholarly and creative accomplishments of Austin Peay's faculty, staff, and students",
    season: "2017 Winter Program",
    date: "Tuesday, February 28, 2017",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "Light Refreshments",
      "5:30 PM":
        "Featured Presentation: <i>...But if a Zombie Apocalypse Did Occur</i>",
    },
    location: "Woodward Library, Room 232, APSU",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "The featured presentation will be from the authors and editors of <i>...But if a Zombie Apocalypse Did Occur: Essays on Medical, Military, Governmental, Ethical, Economic, and Other Implications</i>, a book writeen and edited by APSU faculty that is part of this year's Celebration of Scholarship.",
    },
    primaryPhoto: "/images/events/2017WinterProgram-PrimaryImage.jpg",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event31: {
    title: '<i>"Fake News, Alternative Facts: Jornalism\'s New Age"</i>',
    subtitle: "featuring Pulitzer Prize winning reporter Jackie Crosby",
    season: "2017 Spring Social",
    date: "Saturday, April 1, 2017",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Dinner catered by the Party Station",
      "7:30 PM":
        '"Program featuring Jackie Crosby, Pulitzer Prize winning reporter: <i>"Fake News, Alternative Facts: Journalism\'s New Age"</i>',
    },
    location: "F&M Bank, Franklin Room<br>50 Franklin St., Clarksville, TN",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      DressCode: "Business Casual",
      RSVP: "RSVP by March 22, call 931-221-7618 for tickets.",
      Price:
        "$50 for Woodward Library Society members, $65 for nonmbers.<br>(Patron, Sponsor, & Benefactor level members have tickets as a result of their membership; please call 931-221-7618 for confirmation.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event32: {
    title:
      '<i>"The Story of Dorothy Dix: From Local Roots to Global Celebrity"</i>',
    subtitle: "",
    season: "2017 Summer Program",
    date: "Saturday, June 24, 2017",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "<strong>10:30 AM</strong>":
        "<strong>Exhibity of Dorothy Dix Archival Materials</strong><br>Felix G. Woodward Library, room 232",
      "<strong>11:30 AM</strong>":
        "<strong>Lunch: Classic Sandwich Buffet</strong><br>$12.95 per person; please RSVP to 931-221-7618 by June 19.<br>416 College St. (former Jenkins & Wynne truck showroom)",
      "<strong>12:30 PM</strong>":
        "<strong>Dorothy Dix Presentation and Documentary Video</strong><br>Presented by Eloise Weatherspoon, Ellen Kanervo, Taylor Emery, Kathy Lee Heuston, and Inga Filippo<br>416 College St. (former Jenkins & Wynne truck showroom)",
    },
    location: "",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      RSVP: "RSVPs are necessary only for the luncheon.",
      Price:
        "The exhibit and presentation are free of charge and open to all Woodward Library Society members and guests.",
    },
    primaryPhoto: "/images/events/2017SummerProgram-PrimaryImage.png",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event33: {
    title: "Readings from Their Latest Books",
    subtitle: "featuring Andrea Spofford, Amy Wright, & Stephanie Dugger",
    season: "2018 Winter Program",
    date: "Wednesday, January 31, 2018",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "Social Time & Refreshments",
      "5:30 PM": "Readings",
    },
    location: "APSU Trahern Building, Laboratory Theatre",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Price:
        "The program is free of charge and open to all Woodward Library Society members and guests.",
      RSVP: "No RSVP necessary. We look forward to seeing you there!",
    },
    primaryPhoto: "/images/events/2018WinterProgram-Image2.png",
    images: {
      //"<src>" : "<alt>"
      "/images/events/2018WinterProgram-Image1.jpg":
        "Book cover of 'Either Way, You're Done, by Stephanie McCarley Dugger'",
      "/images/events/2018WinterProgram-Image3.jpg":
        "Book cover of 'Everything in the Universe' by Amy Wright",
    },
  },

  event34: {
    title: "<i>My Father's War: A Story of Conflict, Survival, and Grace</i>",
    subtitle: "featuring Carol Ponder & Robert Kiefer",
    season: "2018 Society Social",
    date: "Saturday, April 21, 2018",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Buffet Dinner",
      "7:30 PM": "Program",
    },
    location: "F&M Bank, Franklin Room<br>50 Franklin St., Clarksville, TN",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Price: "$50 for Library Society members; $65 for non-members.",
      RSVP: "RSVP by April 16, 2018",
      MoreInfo:
        "For more information contact the Library Office, 931-221-7618.",
      Description:
        "<i>My Father's War</i> is based on the WWII memoir Ponder Anew by Lt. Herschel Ponder. When he arrives home after three years at war, Lt. Ponder must reintegrate into civilian life while struggling with PTSD and other unseen wounds. In addition to recreating her father’s memoirs, Carol Ponder and Robert Kiefer perform songs from the period and from Lt. Ponder’s beloved Appalachian mountains to create a beautiful setting for his story.",
    },
    primaryPhoto: "/images/events/2018SpringSocietySocial-PrimaryImage.png",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event35: {
    title: "Seeking Balance through Creative Expression",
    subtitle: "featuring Dr. Beatrix Brockman",
    season: "2018 Summer Program",
    date: "Tuesday, August 14, 2018",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "",
    },
    location: "Woodward Library, Room 232",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Price:
        "The program is free of charge and open to all Woodward Library Society members and guests.",
    },
    primaryPhoto: "/images/events/2018SummerProgram-PrimaryImage.png",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event36: {
    title: "<i>A Celebration of Scholarship</i>",
    subtitle:
      "Spotlighting the scholarly and creative accomplishments of Austin Peay's faculty, staff, and students",
    season: "2019 Winter Program",
    date: "Tuesday, February 19, 2019",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "",
    },
    location: "Woodward Library, Room 232",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "Faculty members will give presentations about their recent research and publications.",
      Price:
        "The program is free of charge and open to all Woodward Library Society members and guests.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event37: {
    title: "Dixie Dewdrop: The Uncle Dave Macon Story",
    subtitle:
      "featuring author Michael D. Doubler. With special guest musician John  Doubler",
    season: "2019 Society Social",
    date: "Saturday, April 6, 2019",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "",
    },
    location: "F&M Bank, Franklin Room<br>Clarksville, TN",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "One of the earliest performers on Nashville’s WSM Radio, singer and banjo player Uncle Dave Macon was the Grand Ole Opry’s first superstar. His old-time music and energetic stage presence made him a national sensation and fueled a thirty year run as one of America’s most beloved entertainers.",
      AdditionalInfo:
        "In addition to the program, the evening will include a social hour and dinner catered by the Party Station. There will also be a book sale and signing and an auction of gift baskets, including one containing Michael Doubler’s book, Uncle Dave Macon CDs, a DVD, Ryman tour tickets, and two tickets to the Grand Ole Opry.",
      Price: "$50 for Library Society members; $65 for non-members.",
      RSVP: "RSVP by March 22, 2019.",
      Contact: "For more information contact the Library Office, 931-221-7618.",
    },
    primaryPhoto: "/images/events/2019SpringSocietySocial-PrimaryImage.png",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event38: {
    title:
      "Book Talk with Dr. Ozzie Di Paolo Harrison: <i>Femicide in Argentine Literature</i>",
    subtitle: "",
    season: "2019 Fall Program",
    date: "Monday, November 18, 2019",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "",
    },
    location: "Art & Desgin Building, Room 120, APSU",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "This event is open to Woodward Library Society members and guests.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event39: {
    title: "Book Art Talk by Jim Diehr",
    subtitle: "Illustrator of <i>Bacon and Me</i>",
    season: "2020 Winter Program",
    date: "Wednesday, February 26, 2020",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "",
    },
    location: "Felix G. Woodward Library<br>Conference Room 232",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "This event is open to Woodward Library Society members and guests.",
    },
    primaryPhoto: "/images/events/2020WinterProgram-PrimaryImage.png",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event40: {
    title: "<i>A Celebration of Scholarship</i>",
    subtitle:
      "Spotlighting the scholarly and creative accomplishments of Austin Peay's faculty, staff, and students",
    season: "2022 Winter Program",
    date: "Tuesday, February 15, 2022",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "",
    },
    location: "Woodward Library, Room 232",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "Faculty members will give presentations about their recent research and publications.",
      ASPIRE:
        'The bibliography can be found in <a href="https://aspire.apsu.edu/items/ac80ecca-37fb-4ab3-87b5-a1a13572098f">ASPIRE</a>.',
      Price:
        "The program is free of charge and open to all Woodward Library Society members and guests.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },
  event41: {
    title: "<i>The Diary of Serepta Jordan</i>",
    subtitle: "featuring Minoa Uffelman, Ellen Kanervo, & Phyllis Smith",
    season: "2022 Spring Society Social",
    date: "Saturday, April 23, 2022",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "Social Hour",
      "6:30 PM": "Catered Dinner",
      "7:30 PM": "Program",
    },
    location: "Austin Peay State University, Fortera Stadium, Club Level",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Description:
        "Serepta Jordan's daily diary of life in New Providence, Tennessee from the fall of 1857 to the summer of 1864 enriches Civil War history with a unique female voice. The diary editors relay Jordan's local news reports and war updates while preserving her thoughts and feelings about the Civil War and those involved in the conflict. Jordan's diary includes details about her daily activities and social life, providing a fascinating look at life in the Clarksville area more than 150 years ago.",
      RSVP: 'RSVP by April 15, 2022 using <a href="./images/events/2022SocietySocialReplyCard.pdf">this reply card</a>.<br>Please send your reply card to the Woodward Library Office, PO Box 4595, or call 931-221-7618.',
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "./images/events/2022SpringSocietySocial-Image1.png": "",
    },
  },
  event42: {
    title: "\"Let's Talk About It: Women's Suffrage\"",
    subtitle:
      "<i>Vanguard: How Black Women Broke Barriers, Won the Vote, and Insisted on Equality for All</i><br>Facilitated by Paula White and LaNeeca Williams",
    season: "2022 Summer Program",
    date: "Thursdsay, July 21, 2022",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "",
    },
    location: "APSU Office of Equity, Access, and Inclusion<br>416 College St.",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      "Free Admission":
        "The program is free of charge and open to all Woodward Library Society members and guests.",
    },
    primaryPhoto: "",
    images: {
      //"<src>" : "<alt>"
      "/images/events/2022SummerProgram-PrimaryImage.jpg":
        "Book cover of 'Vanguard' by Martha S. Jones",
    },
  },

  event43: {
    title: "Author Talk: <i>Just Baby Fat</i>",
    subtitle: "featuring author Dr. Jalesa Parks",
    season: "2022 Fall Program",
    date: "Monday, November 7, 2022",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "",
    },
    location: "Newton Military Family Resource Center<br>426 College St.",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Refreshments: "Light refreshments.",
      Raffle: "$25 Barnes & Noble Gift Card Raffle.",
      "Open Admission":
        "The program is free of charge and all are welcome to attend.",
    },
    primaryPhoto: "./images/events/2022FallProgram-PrimaryImage.png",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event44: {
    title: "Meet Dr. Sharon Mabry",
    subtitle: "author of <i>The Postmaster's Daughter<i>",
    season: "2023 Winter Program",
    date: "Tuesday, February 21, 2023",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:30 PM": "",
    },
    location: "Art + Design Building, Heydel Hall",
    details: {
      //"<detailtype(not displayed)>" : "<value to be displayed>"
      Refreshments:
        "Light refreshments will be provided. $25 Barnes & Noble Gift Card Door Prize",
      Notes:
        "A book signing will follow the presentation. Copies of the book will be available to purchase for $20.",
      "Open Addmission":
        "The program is free of charge and all are welcome to attend.",
    },
    primaryPhoto: "/images/events/2023WinterProgram-PrimaryImage.jpg",
    images: {
      //"<src>" : "<alt>"
      "": "",
    },
  },

  event45: {
    title:
      "Presentation and Musical Performance <i>featuring</i> Dr. David Goldblatt",
    subtitle: "on the works of Julius Chajes",
    season: "2023 Fall Program",
    date: "Tuesday, October 17, 2023",
    times: {
      //"<time (e.g. 7:00 PM)>" : "<description(eg meet and greet with snacks)>"
      "5:00 PM": "Reception",
      "5:30 PM": "Presentation and Performance",
    },
    location: "Trahern Auditorium",
    details: {
      "Open Admission":
        "The program is free of charge and all are welcome to attend.",
      RSVP: "Please RSVP by Friday, October 13 by calling 931-221-7618.",
    },
    primaryPhoto: "",
    images: {
      "": "",
    },
  },

  event46: {
    title: "<i>A Celebration of Scholarship</i>", //for quotes or apostrophes in a string use the escape character forward slash before it i.e. 'Postmaster\'s Daughter'
    subtitle:
      "Spotlighting the scholarly and creative accomplishments of Austin Peay's faculty, staff, and students", //for italics use <i></i> i.e. "author of <i>The Grinch</i>."
    season: "2024 Winter Program", //i.e. "2023 Fall Program"
    date: "Thursday, February 8th, 2024", //i.e. "Tuesday, October 17, 2023"
    times: {
      //<time> i.e. "7:00 PM" : <description>(OPTIONAL) i.e. "Refreshments", "Program Commencement", "Social Hour"
      "4:00 PM": "",
    },
    location: "Truck Center, 416 College St.",
    details: {
      //"<type of detail>(OPTIONAL-used for readability) i.e. RSVP deadline" : "<value to be displayed> i.e. Please RSVP by 1/1/2000 to ###-###-####"
      Description:
        "At the reception, faculty members will give presentations about their recent research and publications.",
      Admission:
        "The program is free of charge and open to all Woodward Library Society members and guests.",
    },
    primaryPhoto: "", //"<url>"
    images: {
      //"<src> i.e. /images/events/2023WinterProgram-PrimaryImage" : "<alt> i.e. Purple front cover of the book 'The Postmasters Daughter' by Sharon Mabry. "
      "": "",
    },
  },
  /*
  //TEMPLATE - REUSE and INCREMENT the _, AND INCREMENT the totalNumberOfEvents variable located below.
  //Do Not remove any properties. If you do not have data to include for a property, leave it as an empty string
  event_: {
   title: "", //for quotes or apostrophes in a string use the escape character forward slash before it i.e. 'Postmaster\'s Daughter'
    subtitle: "", //for italics use <i></i> i.e. "author of <i>The Grinch</i>."
    season: "", //i.e. "2023 Fall Program"
    date: "", //i.e. "Tuesday, October 17, 2023"
    times: {
      //<time> i.e. "7:00 PM" : <description>(OPTIONAL) i.e. "Refreshments", "Program Commencement", "Social Hour"
      "": "",
    },
    location: "",
    details: {
      //"<type of detail>(OPTIONAL-used for readability) i.e. RSVP deadline" : "<value to be displayed> i.e. Please RSVP by 1/1/2000 to ###-###-####"
      "": "",
    },
    primaryPhoto: "", //"<url>"
    images: {
      //"<src> i.e. /images/events/2023WinterProgram-PrimaryImage" : "<alt> i.e. Purple front cover of the book 'The Postmasters Daughter' by Sharon Mabry. "
      "": "",
    },
  },*/
};
//totalNumberOfEvents should match the greatest event_ number in the eventList object.
const totalNumberOfEvents = 46;

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
      "/images/galleries/dinnerontheriver/WS013.jpg": "",
      "/images/galleries/dinnerontheriver/WS015.jpg": "",
      "/images/galleries/dinnerontheriver/WS016.jpg": "",
      "/images/galleries/dinnerontheriver/WS022.jpg": "",
      "/images/galleries/dinnerontheriver/WS029.jpg": "",
      "/images/galleries/dinnerontheriver/WS030.jpg": "",
      "/images/galleries/dinnerontheriver/WS017.jpg": "",
      "/images/galleries/dinnerontheriver/WS018.jpg": "",
      "/images/galleries/dinnerontheriver/WS033.jpg": "",
      "/images/galleries/dinnerontheriver/WS040.jpg": "",
      "/images/galleries/dinnerontheriver/WS034.jpg": "",
      "/images/galleries/dinnerontheriver/WS042.jpg": "",
      "/images/galleries/dinnerontheriver/WS044.jpg": "",
      "/images/galleries/dinnerontheriver/WS086.jpg": "",
      "/images/galleries/dinnerontheriver/WS035.jpg": "",
      "/images/galleries/dinnerontheriver/WS037.jpg": "",

      "/images/galleries/dinnerontheriver/WS041.jpg": "",

      "/images/galleries/dinnerontheriver/WS045.jpg": "",
      "/images/galleries/dinnerontheriver/WS048.jpg": "",
      "/images/galleries/dinnerontheriver/WS051.jpg": "",
      "/images/galleries/dinnerontheriver/WS053.jpg": "",
      "/images/galleries/dinnerontheriver/WS055.jpg": "",
      "/images/galleries/dinnerontheriver/WS059.jpg": "",
      "/images/galleries/dinnerontheriver/WS060.jpg": "",
      "/images/galleries/dinnerontheriver/WS061.jpg": "",
      "/images/galleries/dinnerontheriver/WS062.jpg": "",
      "/images/galleries/dinnerontheriver/WS064.jpg": "",
      "/images/galleries/dinnerontheriver/WS068.jpg": "",
      "/images/galleries/dinnerontheriver/WS070.jpg": "",
      "/images/galleries/dinnerontheriver/WS083.jpg": "",
    },
  },
  gallery2: {
    title:
      "Woodward Library Society Fall 2012 Program:<br>The Politics of Memory: Archives, Historic Preservation, and Lessons of the Past",
    subtitle: "by Dr. Susan Curtis, Purdue University<br>October 18, 2012",
    images: {
      "images/galleries/politicsofmemory/PoliticsofMemory1.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory2.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory6.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory7.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory22.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory23.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory24.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory25.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory9.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory10.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory11.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory12.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory13.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory14.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory15.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory16.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory17.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory18.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory19.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory20.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory21.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory5.jpg": "",
      "images/galleries/politicsofmemory/PoliticsofMemory8.jpg": "",
      "images/galleries/politicsofmemory/PoliticsOfMemory3.png": "",
      "images/galleries/politicsofmemory/PoliticsofMemory4.png": "",
    },
  },
  gallery3: {
    title:
      "Woodward Library Society 2013 Spring Social: Enter Laughing (But Quietly Please!): Amusing Anecdotes from a Life in Libraries",
    subtitle:
      "Featuring Dr. Joe Trahern, Professor Emeritus of English, University of Tennessee April 16, 2013",
    images: {
      "/images/galleries/spring2013/spring2013_photo9.jpg":
        "Wide view of society members and attendees in their seats",
      "/images/galleries/spring2013/spring2013_photo10.jpg":
        "Wide view of society members and attendees in their seats",
      "/images/galleries/spring2013/spring2013_photo11.jpg":
        "Society speakers preparing plaque at podium",

      "/images/galleries/spring2013/spring2013_photo13.jpg":
        "Society speakers presenting plaque at podium",
      "/images/galleries/spring2013/spring2013_photo14.jpg":
        "Society members presenting a giant check for 13,121 dollars",
      "/images/galleries/spring2013/spring2013_photo12.jpg":
        "Society speakers laughing while preparing plaque at podium",
      "/images/galleries/spring2013/spring2013_photo2.jpg":
        "Society members hugging after a donation",

      "/images/galleries/spring2013/spring2013_photo4.jpg":
        "Society members hugging",
      "/images/galleries/spring2013/spring2013_photo7.jpg":
        "Society speaker at podium",
      "/images/galleries/spring2013/spring2013_photo3.jpg":
        "Society members talking",
      "/images/galleries/spring2013/spring2013_photo8.jpg":
        "Society speaker at podium",
      "/images/galleries/spring2013/spring2013_photo6.jpg": "Society speakers",
      "/images/galleries/spring2013/spring2013_photo1.jpg":
        "Society member at podium",
      "/images/galleries/spring2013/spring2013_photo5.jpg": "Society speaker",
    },
  },
  /* TEMPLATE - REUSE AND INCREMENT THE totalNumberOfGalleries variable. totalNumberOfGalleries should = this most recently added galleries id that replaces _ in gallery_
  gallery_: {
    title: "",
    subtitle: "",
    images: {
      //"<url> i.e. images/galleries/dinnerontheriver/WS001.jpg" : "<alt attribute> i.e. Water Street Event Center street sign the day of the event."
      "" : "",
    },
  },*/
};
let totalNumberOfGalleries = 3;
//getters for galleries
export function getGallery(galleryID) {
  return galleryList[galleryID];
}
export function getTotalNumberOfGalleries() {
  return totalNumberOfGalleries;
}
