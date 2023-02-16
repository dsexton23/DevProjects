let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below

  //accesses value of 'active mission' from 'spaceship' object
  let isActive = spaceship['Active Mission']
  
  //logs the value of the 'active mission' property
  console.log(spaceship['Active Mission'])







  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below

  //changes color to glorious gold
  spaceship.color='glorious gold';
// adds a numEngines property to spaceship with value of 7
  spaceship.numEngines=7;

//deletes secret mission property
  delete spaceship['Secret Mission'];











  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

//creates an alienShip object containing methods retreat() and takeOff() which console log their repsective phrases
const alienShip = {

  retreat(){
    console.log(retreatMessage)
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
//invokes the above methods
alienShip.retreat(); //prints 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.'
alienShip.takeOff(); //prints 'Spim... Borp... Glix... Blastoff!'








let spaceship = {
    passengers: [{name: 'Darren'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  // assigns captains favorite food as 0th index of favorite foods
  let capFave = spaceship.crew.captain['favorite foods'][0];

  let firstPassenger = spaceship.passengers[0]; //assigns first passenger as string 'Darren' assigned above as passengers 0th index











  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Sets a function that has an onject as a parameter changing the fuel type to avocado oil
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  // Sets a function that has an onject as a parameter changing the disabled value to true
  let remotelyDisable = obj =>{
    obj.disabled = true;
  }
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  
  console.log(spaceship); // prints { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }
  










  let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

// iterates through the crew object in spaceship and prints the ranks and names 
for(let crewMember in spaceship.crew){
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

// iterates through the crew object in spaceship and prints the names and degrees
for(let memberDegree in spaceship.crew){
  console.log(`${spaceship.crew[memberDegree].name}: ${spaceship.crew[memberDegree].degree}`)
}