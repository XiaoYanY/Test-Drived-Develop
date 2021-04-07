const { Direction } = require('../consts');
const { toLeft, toRight } = require('../utils');

class Car {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }
  getState() {
    return {
      x: this.position.x,
      y: this.position.y,
      direction: this.direction
    }
  }
  turnLeft() {
    return this.direction = toLeft(this.direction);
  }
  turnRight() {
    return this.direction = toRight(this.direction);
  }
  move(map) {
    const key = map[this.direction].position;
    this.position[key] = this.position[key] += map[this.direction].step;
  }
  forward() {
    // north -> y +1
    // west -> x -1
    //East -> x +1
    //South -> y -1
    let map = {
      [Direction.North]: {
        position: "y",
        step: 1
      },
      [Direction.West]: {
        position: "x",
        step: -1
      },
      [Direction.East]: {
        position: "x",
        step: 1
      },
      [Direction.South]: {
        position: "y",
        step: -1
      }
    }
    this.move(map);
  }
  back() {
    //与前进相反
    let map = {
      [Direction.North]: {
        position: "y",
        step: -1
      },
      [Direction.West]: {
        position: "x",
        step: 1
      },
      [Direction.East]: {
        position: "x",
        step: -1
      },
      [Direction.South]: {
        position: "y",
        step: 1
      }
    }
    this.move(map)
  }
}
module.exports = Car;