/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
function Person(name, age) {
  this.name = name,
  this.age = age,
  this.stomach = [];
}

Person.prototype.eat = function(someFood){
  if(this.stomach.length < 10){
    this.stomach.push(someFood)
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

const me = new Person('Austin', 29);
const brother = new Person('Grant', 23);
console.log(me.toString());
console.log(brother.toString());

me.eat('fajitas');
console.log('test 1:', me.stomach);
me.poop();
console.log('test 1:', me.stomach);


  
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
function Car(model, milesPerGallon) {
    this.model = model,
    this.milesPerGallon = milesPerGallon,
    this.tank = 0,
    this.odometer = 0
}

Car.prototype.fill = function(gallons){
  this.tank += gallons
}


Car.prototype.drive = function(distance){
  const driveableMiles = this.tank * this.milesPerGallon;
  if(distance <= driveableMiles){
    this.odometer = this.odometer + distance;
    this.tank = this.tank - (distance / this.milesPerGallon);
  }else{
    this.odometer = this.odometer + driveableMiles;
    this.tank = 0;
    console.log(`I ran out of fuel at ${this.odometer} miles`);
    return `I ran out of fuel at ${this.odometer} miles`;
  }
}

//test for stretch
const eclipse = new Car('eclipse', 20);

eclipse.fill(14);
console.log(eclipse.tank);
eclipse.drive(281);
console.log(eclipse.odometer);


  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age), //telling Baby who its parent is
   this.favoriteToy = favoriteToy
  }
  
  Baby.prototype = Object.create(Person.prototype); //this tells Baby to inherit the Person's methods.... //any special methods that belong to Baby we write after this.

  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
  }
 
  const jack = new Baby("Jack", 3, "ball")
  // console.log('task3:', jack.toString());
  // console.log('Task 3:', jack.play());
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. window/global binding: when in the global scope, 'this' will be the window object 
    2. implicit binding: object.function(); --> 'this' is implicitly bound to the object before the function invoked (before the .function()) 
    3. new binding: the 'new' keyword used with a constructor function assigns 'this' to the newly created object or variable assigned to the new object. 
    4. explicit binding: .call, .bind, .apply methods called with a function explicitly assign 'this' to the object passed in as the argument to the function
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}