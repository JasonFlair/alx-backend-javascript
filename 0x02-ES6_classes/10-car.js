export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    /** return new instance of whatever class is referenced by the 'this'
     * e.g const newcar = new Car(brand, motor, color)
     * anothercar = newcar.cloneCar(); will return newcar's class object bc of 'this.constructor' */
    const clonedCar = new this.constructor(this._brand, this._motor, this._color);
    return clonedCar;
  }
}
