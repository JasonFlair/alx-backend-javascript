export default class HolbertonClass {
  // causes return of different types from a class, depending on the type cast
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // if type cast is number, valueOf is called
  valueOf() {
    return this._size;
  }

  // if type cast is string, toString is called
  toString() {
    return this._location;
  }
}
