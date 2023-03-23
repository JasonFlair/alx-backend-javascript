export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name === 'string') {
        this._name = name;
    } else {
        throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'number') {
        this._length = length;
    } else {
        throw new TypeError('Length must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (typeof students === 'object') {
        this._students = students;
    } else {
        throw new TypeError('Students must be an array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
