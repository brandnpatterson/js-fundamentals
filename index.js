var globalName = 'Brandon';

function print(arg) {
  console.log(arg);
}

print(globalName);

var Car = function(make, model) {
  this.init = function() {
    this.fatArrow();
    this.bindMethod();
    this.useCallbacks(this.utilityMethod, this.utilityMethodSecond);
    this.spreadOperator();

    var restResults = this.restOperatorAndReduce(1, 2, 3, 4);
    console.log(restResults);

    this.filterAndIndexOf(this.numbers);
  };
  this.numbers = [1, 1, 1, 1, 1, 2, 3, 4];
  this.make = make;
  this.model = model;
  this.utilityMethod = function() {
    console.log(this);
    console.log('in the callback!');
  }.bind(this);
  this.utilityMethodSecond = function(_this) {
    console.log(_this);
    console.log('another callback!');
  };
  this.fatArrow = function() {
    setTimeout(() => console.log(this.make), 0);
  };
  this.bindMethod = function() {
    setTimeout(
      function() {
        console.log(this.model);
      }.bind(this)
    );
  };
  this.useCallbacks = function(callback, callbackTwo) {
    console.log('before the callback!');
    callback();
    console.log('after the callback!');
    console.log('further after the callback!');
    callbackTwo(this);
  };
  this.spreadOperator = function() {
    var middle = [3, 4];
    var arr = [1, 2, ...middle, 5, 6];

    console.log(arr);
  };
  this.restOperatorAndReduce = function(...theArgs) {
    return theArgs.reduce((a, b) => a + b);
  };
  this.filterAndIndexOf = function(numbers) {
    var unique = numbers.filter((v, i, a) => a.indexOf(v) === i);

    console.log(unique);
  };
};

var laurensCar = new Car('toyota', 'corolla');
laurensCar.init();

function getName() {
  this.name ? console.log(this.name) : console.log('no name');
}

var person = {
  name: 'Brandon'
};

getName.call(person);
