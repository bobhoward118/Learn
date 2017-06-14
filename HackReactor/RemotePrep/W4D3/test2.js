var person = {
  name: 'Bob',
  location: 'Austin',
  hobby: ['JavaScript', 'Web Dev'],
  dog: {
    name: 'Sophie',
    hobby: 'fetching',
  },
  party: function(){
    console.log('dance, dance, dance');
  }
};
// person.name
// person.location
// person.hobby
// person.dog
// person.party()


var freestanding_fn = function(){
  console.log(arguments, this)
}
// freestanding_fn("These are the arguments...", "What is the calling context? -->")


var obj = {
  key1: 'value 1',
  key2: 'value 2',
  method: function(){
    console.log("I'm being invoked in the context of...", this)
  },

}
// obj.method()


person.work = function() {
  console.log("Welcome to McDonald's, I'm " + this.name + ". May I take your order?")
  console.log("Enjoy this beautiful day in " + this.location)
  console.log("Would you like to hear a story about " + this.dog.name + " and his " + this.dog.hobby[1])
}
// person.work()


var work = function() {
  console.log("Tell me about your dog " + person.dog.name);
}
// work()

person.workout = function() {
  console.log("The value to key1 is :" + obj.key1);
}
// person.workout()


var float_through_life_on_autopilot = function() {
  console.log(person.work() + person.party() + person.workout());
}
// float_through_life_on_autopilot()
// console.log(this.work());


var car = {
  type: "Honda Civic",
  position: 0,
  speed: 10,
  move: function(){
    var prev = this.position
    this.position = this.position + this.speed
    console.log(this.type + " is moving from " + prev + " to " + this.position)
  }
}
//
// car.move()
// car.move()
// car.move()
// car.move()
// car.move()
// car.move()


var dog = {
  name: "Fido",
  location: "Austin",
  party: function() {
    console.log(this.name + " dances wildly");
  },
  favorite_food: "kibble",
  hungry: true,
  eat: function() {
    console.log(this.name + " loves to eat " + this.favorite_food);
    this.hungry = false;
  },
  go_to_park: function() {
    console.log(this.name + " goes to the park in  " + this.location);
    this.hungry = true;
  }
}
// dog.go_to_park()
// dog.hungry
