const { Direction } = require('../consts');

const map = {
  [Direction.North]: {
    left: Direction.West,
    right: Direction.East
  },
  [Direction.South]: {
    left: Direction.East,
    right: Direction.West
  },
  [Direction.West]: {
    left: Direction.South,
    right: Direction.North
  },
  [Direction.East]: {
    left: Direction.North,
    right: Direction.South
  },
}
exports.toLeft = direction => {
  return map[direction].left
}

exports.toRight = direction => {
  return map[direction].right
}