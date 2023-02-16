const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){
      return(`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
    }
  };
  
  console.log(robot.provideInfo()); // prints: I am 1E78V2 and my current energy level is 100.












  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if (typeof this._energyLevel === 'number'){ // checks to see if value is a number
        return `My current energy level is ${this._energyLevel}`
      }else{ // if value is a string, null or undefined
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  
  console.log(robot.energyLevel); // logs `My current energy level is 100`






  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    //setter function to change the number stored in _numOfSensors as long as it is valid
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0){
       this._numOfSensors = num;
      }else{
        return 'Pass in a number that is greater than or equal to 0';
      }
    },
  };
  
  // calls the setter function
  robot.numOfSensors = 100
  
  console.log(robot.numOfSensors)






  //factory that can create multiple objects and store key values into it
  const robotFactory = (model, mobile) => {
    return{
      model,
      mobile,
      beep(){
        console.log('Beep Boop')
      }
    }
  }
  
  //creates a robot named tinCan with a model and mobile value
  const tinCan = robotFactory('P-500', true);

  //shows that the robot object tinCan was produced by printing beep boop
  tinCan.beep()








//dectronstructured assignment, extract key-value pairs from objects and save them as variables
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };


  const { functionality } = robot; // takes the functionality section from the robot object and saves it as a variable
  
  functionality.beep()









//built in object class methods used to access object instance methods
  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};


//the following code prints all of the objects in a list e.g. model, mobile, sentient
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// the following code prints the objects with their pairs, e.g. [model, SAL-1000], [mobile, true]
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// following code can add object pairs to the variable 
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);