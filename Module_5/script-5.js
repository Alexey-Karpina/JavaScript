"use strict";

class Car {
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    if (this._isOn) {
      console.log(`The car is already running`);
      return;
    }
    this._isOn = true;
    console.log(`Ratatatata, start the engine`);
  }
  turnOff() {
    if (this._isOn) {
      this._isOn = false;
      this._speed = 0;
      console.log(`Pshhhh, stop the engine`);
      return;
    }
    console.log(`The car is already turned off`);
  }
  accelerate(value) {
    if (this._speed + value > this._maxSpeed) {
      console.log(`Stop it, you can't go faster than the car can afford`);
      return;
    }
    this._speed += value;
    console.log(`Here we go!!!`);
  }
  decelerate(value) {
    if (this._speed - value <= 0) {
      console.log(`Wtf, you are already standing`);
      return;
    }
    this._speed -= value;
  }
  drive(hours) {
    if (this._isOn) {
      this._distance += this._speed * hours;
      return;
    }
    console.log(`Your car is of`);
  }
  static getSpecs(car) {
    console.log(`Max Speed: ${car._maxSpeed},\n
        Speed: ${car._speed}\n
        Is on: ${car._isOn}\n
        Distance: ${car._distance}\n
        Price: ${car._price}`);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);


console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);