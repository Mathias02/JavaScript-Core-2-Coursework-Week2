/*
Below you will find a list of people that I know. 
*/

/*
1) Reading
Before you start, you should read through the object below so that you understand the structure of it.
When you've finished. Continue to the exercises below.
*/

const friends = [
  {
    age: 39,
    company: "PEARLESSA",
    name: {
      first: "Vilma",
      last: "Hardy",
    },
    email: "vilma.hardy@pearlessa.info",
    colleagues: [
      {
        name: "Sally Nielsen",
        age: 37,
        skills: ["Data", "Strategic", "Problem"],
      },
      {
        name: "Barber Wooten",
        age: 59,
        skills: ["Numeracy", "Strategic", "thinking"],
      },
      {
        name: "Merle Gilbert",
        age: 44,
        skills: ["thinking", "management", "making"],
      },
      {
        name: "Norton Spence",
        age: 59,
        skills: ["Interviewing", "Observation", "Motivation"],
      },
      {
        name: "Angel Simon",
        age: 42,
        skills: ["Numeracy", "Strategic", "Research"],
      },
    ],
  },
  {
    age: 39,
    company: "PLUTORQUE",
    name: {
      first: "Aisha",
      last: "Gentry",
    },
    email: "aisha.gentry@plutorque.net",
    colleagues: [
      {
        name: "Latonya Hogan",
        age: 67,
        skills: ["Problem", "Sharing", "Project"],
      },
      {
        name: "Kate Sheppard",
        age: 42,
        skills: ["Scheduling", "management", "Respect"],
      },
      {
        name: "Lela Espinoza",
        age: 40,
        skills: ["management", "Meeting", "Data"],
      },
      {
        name: "Lindsay Larsen",
        age: 20,
        skills: ["Numeracy", "Reporting", "management"],
      },
      {
        name: "Deleon Gallegos",
        age: 48,
        skills: ["Respect", "Problem", "Decision"],
      },
    ],
  },
  {
    age: 36,
    company: "LINGOAGE",
    name: {
      first: "Mitchell",
      last: "Whitfield",
    },
    email: "mitchell.whitfield@lingoage.io",
    colleagues: [
      {
        name: "Head Fitzpatrick",
        age: 31,
        skills: ["People", "Collaboration", "data"],
      },
      {
        name: "Natasha Campos",
        age: 44,
        skills: ["Respect", "Critical", "Strategic"],
      },
      {
        name: "Abby Mclaughlin",
        age: 40,
        skills: ["analysis", "Planning", "Scheduling"],
      },
      {
        name: "Kramer Torres",
        age: 61,
        skills: ["Observation", "Troubleshooting", "Delegating"],
      },
      {
        name: "Lawrence Tillman",
        age: 42,
        skills: ["Planning", "thinking", "setting"],
      },
    ],
  },
  {
    age: 24,
    company: "MELBACOR",
    name: {
      first: "Hooper",
      last: "Kirk",
    },
    email: "hooper.kirk@melbacor.me",
    colleagues: [
      {
        name: "Clarissa Kirby",
        age: 37,
        skills: ["management", "making", "Categorizing"],
      },
      {
        name: "Contreras Ballard",
        age: 38,
        skills: ["Prioritizing", "Numeracy", "Data"],
      },
      {
        name: "Wyatt Small",
        age: 29,
        skills: ["Respect", "Decision", "Sharing"],
      },
      {
        name: "Mable Mcgee",
        age: 44,
        skills: ["Sharing", "Decision", "Prioritizing"],
      },
      {
        name: "Henry Rodgers",
        age: 39,
        skills: ["thinking", "Communication", "management"],
      },
    ],
  },
  {
    age: 40,
    company: "CIPROMOX",
    name: {
      first: "Sutton",
      last: "Quinn",
    },
    email: "sutton.quinn@cipromox.ca",
    colleagues: [
      {
        name: "Melanie Patterson",
        age: 40,
        skills: ["Reporting", "management", "Numeracy"],
      },
      {
        name: "April Cortez",
        age: 69,
        skills: ["Observation", "People", "management"],
      },
      {
        name: "Butler Frederick",
        age: 68,
        skills: ["Participation", "Data", "solving"],
      },
      {
        name: "Gill Barlow",
        age: 69,
        skills: ["Data", "People", "Coordinating"],
      },
      {
        name: "Rush May",
        age: 44,
        skills: ["Data", "Multi-tasking", "Research"],
      },
    ],
  },
  {
    age: 21,
    company: "ENVIRE",
    name: {
      first: "Haley",
      last: "Knox",
    },
    email: "haley.knox@envire.tv",
    colleagues: [
      {
        name: "Nannie Reyes",
        age: 47,
        skills: ["Sharing", "management", "Time"],
      },
      {
        name: "Sheena Reeves",
        age: 18,
        skills: ["making", "Strategic", "Sharing"],
      },
      {
        name: "Stacie Villarreal",
        age: 34,
        skills: ["Motivation", "Coordinating", "Listening"],
      },
      {
        name: "Enid Hays",
        age: 45,
        skills: ["Categorizing", "solving", "Respect"],
      },
      {
        name: "Pickett Rodriguez",
        age: 27,
        skills: ["management", "Communication", "management"],
      },
    ],
  },
  {
    age: 28,
    company: "PROSELY",
    name: {
      first: "Brittany",
      last: "Jacobson",
    },
    email: "brittany.jacobson@prosely.name",
    colleagues: [
      {
        name: "Glass Weaver",
        age: 64,
        skills: ["Listening", "making", "Flexibility"],
      },
      {
        name: "Brandi Dennis",
        age: 51,
        skills: ["Scheduling", "Motivation", "Interviewing"],
      },
      {
        name: "Lynch Johnston",
        age: 68,
        skills: ["data", "Decision", "Interviewing"],
      },
      {
        name: "Gena Good",
        age: 54,
        skills: ["Motivation", "management", "Multi-tasking"],
      },
      {
        name: "Baldwin Wyatt",
        age: 61,
        skills: ["Advising", "deadlines", "Strategic"],
      },
    ],
  },
  {
    age: 36,
    company: "CAPSCREEN",
    name: {
      first: "Jana",
      last: "Harrison",
    },
    email: "jana.harrison@capscreen.co.uk",
    colleagues: [
      {
        name: "Stacie Villarreal",
        age: 34,
        skills: ["Motivation", "Coordinating", "Listening"],
      },
      {
        name: "Dolly Hubbard",
        age: 55,
        skills: ["Coordinating", "Diplomacy", "Motivation"],
      },
      {
        name: "Cunningham Shelton",
        age: 39,
        skills: ["Prioritizing", "Multi-tasking", "Diplomacy"],
      },
      {
        name: "Gabriela Nunez",
        age: 31,
        skills: ["Data", "Goal", "management"],
      },
      {
        name: "Castro Castaneda",
        age: 63,
        skills: ["Multi-tasking", "Reporting", "making"],
      },
    ],
  },
  {
    age: 31,
    company: "POWERNET",
    name: {
      first: "Gloria",
      last: "Hall",
    },
    email: "gloria.hall@powernet.com",
    colleagues: [
      {
        name: "Lourdes Barr",
        age: 65,
        skills: ["Scheduling", "Delegating", "thinking"],
      },
      {
        name: "Luz Newton",
        age: 21,
        skills: ["Advising", "Multi-tasking", "Sharing"],
      },
      {
        name: "Kelli Holloway",
        age: 46,
        skills: ["Respect", "Collaboration", "Research"],
      },
      {
        name: "Silvia Bean",
        age: 32,
        skills: ["Data", "Motivation", "Goal"],
      },
      {
        name: "Cherie Ramirez",
        age: 36,
        skills: ["Advising", "Categorizing", "Communication"],
      },
    ],
  },
  {
    age: 22,
    company: "POWERNET",
    name: {
      first: "Clay",
      last: "Livingston",
    },
    email: "clay.livingston@powernet.com",
    colleagues: [
      {
        name: "Stacie Villarreal",
        age: 34,
        skills: ["Motivation", "Coordinating", "Listening"],
      },
      {
        name: "Roy Lynn",
        age: 31,
        skills: ["Project", "management", "Goal"],
      },
      {
        name: "Stacey Vaughan",
        age: 29,
        skills: ["Prioritizing", "Categorizing", "Observation"],
      },
      {
        name: "Bradshaw Watts",
        age: 66,
        skills: ["Decision", "Diplomacy", "Collaboration"],
      },
      {
        name: "Lee Warren",
        age: 27,
        skills: ["Strategic", "Advising", "management"],
      },
    ],
  },
];

/*
2) Aged 35 or Older
In the above object you can see my friends and the colleagues of my friends.
First, I want you to find all of my friends who are 35 or older.
*/

let thirtyFiveOrOlder = [];
// const ages = Object.values(friends).filter(item => item.age >= 35).map(elt => elt.name.first);
// thirtyFiveOrOlder = [...ages];
for(let key of friends){
  if(key.age >= 35){
    const names = key.name.first;
    console.log(names);
  }
}


/*
3) Find the email address
Next, I want you to find all of my friends who work for "POWERNET" and then store their emails in the array below
*/

let powerNetEmails = [];
// const companies = Object.values(friends).filter(item => item.company === 'POWERNET').map(elt => elt.email);
// powerNetEmails = [...companies];
for(let key of friends){
  if(key.company === "POWERNET"){
    console.log(key.email)
  }
}



/*
4) colleagues with "Stacie Villarreal"
Next, I want you to find all of my friends who are colleagues of Stacie Villarreal.
You can see who people's colleagues are by seeing the "colleagues" array in each of my friends objects.
This time, I only want the full names ("<firstname> <lastname>") of my friends who are colleagues of hers.
*/

let friendsWhoAreColleaguesOfStacie = [];

// Object.entries(friends).forEach(([key, value]) =>{
//   if(typeof value === 'object'){
//     Object.entries(value).forEach(([el, item]) =>{
//       if(typeof item === 'object'){
//         Object.entries(item).forEach(([fr, mt]) =>{
//         if(mt.name === "Stacie Villarreal"){
//           friendsWhoAreColleaguesOfStacie.log(value.name.first, value.name.last);
//         }
//         })
//       }
//     })
//   }
// });

// const stacieColleagues = Object.values(friends).forEach(item =>{
//   if(typeof item === 'object'){
//     for(let a in item){
//     if(typeof item[a] === "object"){
//       for(let b in item[a]){
//         if(item[a][b].name === "Stacie Villarreal"){
//           console.log(`${item.name.first} ${item.name.last}`)
//         }
//       }
//     }
//     }
//   }
// });
//friendsWhoAreColleaguesOfStacie = [...stacieColleagues];
for(let key of friends){
    let result = key.colleagues;
    for(let key1 of result){
      if(key1.name === 'Stacie Villarreal'){
       const staciesFriends1 = key.name.first;
       const staciesFriends2 = key.name.last;
       friendsWhoAreColleaguesOfStacie.push(`${staciesFriends1} ${staciesFriends2}`);
      }
    }
  }

console.log(friendsWhoAreColleaguesOfStacie )
  


/*
5) Find "Multi-tasking" colleagues
Next, I want you to find all of the colleagues of my friends who are good at "Multi-tasking"
You can tell if they are good at "Multi-tasking" because they will have it listed in their skills
This time, I only want the full names of the people who can multitask
*/

 let colleaguesWhoCanMultitask = [];

// Object.entries(friends).forEach(([it, vals]) =>{
//   if(typeof vals === 'object'){
//     Object.entries(vals).forEach(([it, val]) =>{
//       if(typeof val === 'object'){
//         Object.entries(val).forEach(([key, item]) =>{
//           if(typeof item === 'object'){
//             Object.entries(item).forEach(([id, values]) =>{
//             if(typeof values === 'object'){
//               Object.entries(values).forEach(([bc, za]) =>{
//               if(za === 'Multi-tasking'){
//                 colleaguesWhoCanMultitask.push(new Set[item.name]);
//               }
//               })
//             }
//             })
//           }
//         })
//       }
//     })
//   }
// });

// const multiTasking = Object.values(friends).forEach(item =>{
//   if(typeof item === 'object'){
//     for(let a in item){
//     if(typeof item[a] === "object"){
//       for(let b in item[a]){
//         if(typeof item[a][b] === 'object'){
//           for(let c in item[a][b]){
//             if(item[a][b][c][0] ==='Multi-tasking'){
//               console.log(item[a][b].name)
//             };
//           }
//         }
//       }
//     }
//     }
//   }
// });
for(let key of friends){
  let result = key.colleagues;
  for(let key1 of result){
   const result1 = key1.skills;
   for(let key2 of result1){
    if(key2 === "Multi-tasking"){
      console.log(key1.name)
      const nu = key1.name;
      colleaguesWhoCanMultitask.push(nu);
    }
   }
  }
}
console.log(colleaguesWhoCanMultitask);

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 6-people-I-know.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("2 - friends that are over 35", () => {
  expect(thirtyFiveOrOlder.map(({name}) => name.first)).toIncludeSameMembers([
    "Vilma", "Aisha", "Mitchell", "Sutton", "Jana"
  ]);
});

test("3 - Powernet email addresses", () => {
  expect(powerNetEmails).toIncludeSameMembers([
    "clay.livingston@powernet.com",
    "gloria.hall@powernet.com",
  ]);
});

test("4 - friends with Stacie Villarreal as a colleague", () => {
  expect(friendsWhoAreColleaguesOfStacie).toIncludeSameMembers([
    "Clay Livingston",
    "Jana Harrison",
    "Haley Knox",
  ]);
});

test("5 - colleagues who can multitask", () => {
  expect(colleaguesWhoCanMultitask).toIncludeSameMembers([
  "Rush May",
  "Gena Good",
  "Cunningham Shelton",
  "Castro Castaneda",
  "Luz Newton",
  ]);
});
