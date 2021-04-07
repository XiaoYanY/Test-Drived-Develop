const Car = require('../src/car');
const Positon = require('../src/position');
const { Direction } = require('../consts');

describe("car", () => {
  //初始化
  it("init car", () => {
    const car = new Car(new Positon(0, 0), Direction.North)
    expect(car.getState()).toEqual({
      x: 0,
      y: 0,
      direction: Direction.North
    })
  });
  //转向
  describe("turn left", () => {
    it("North to West", () => {
      const car = new Car(new Positon(0, 0), Direction.North);
      car.turnLeft();
      expect(car.getState()).toEqual({
        x: 0,
        y: 0,
        direction: Direction.West
      })
    });
    it("West to South", () => {
      const car = new Car(new Positon(0, 0), Direction.West);
      car.turnLeft();
      expect(car.getState()).toEqual({
        x: 0,
        y: 0,
        direction: Direction.South
      })
    });
    it("East to North", () => {
      const car = new Car(new Positon(0, 0), Direction.East);
      car.turnLeft();
      expect(car.getState()).toEqual({
        x: 0,
        y: 0,
        direction: Direction.North
      })
    });
    it("South to East", () => {
      const car = new Car(new Positon(0, 0), Direction.South);
      car.turnLeft();
      expect(car.getState()).toEqual({
        x: 0,
        y: 0,
        direction: Direction.East
      })
    });
  });
  describe("turn right", () => {
    const turnRightExpect = (inputDirection, outputDirection) => {
      const car = new Car(new Positon(0, 0), inputDirection);
      car.turnRight();
      expect(car.getState()).toEqual({
        x: 0,
        y: 0,
        direction: outputDirection
      })
    }
    it("right to all direction", () => {
      turnRightExpect(Direction.North, Direction.East);
      turnRightExpect(Direction.West, Direction.North);
      turnRightExpect(Direction.East, Direction.South);
      turnRightExpect(Direction.South, Direction.West);
    });
  });
  // 前进 
  describe("move to forward", () => {
    const moveTo = (direction, outputPosition) => {
      const car = new Car(new Positon(0, 0), direction);
      car.forward();
      expect(car.getState()).toEqual({
        ...outputPosition,
        direction: direction
      })
    }
    it("If the current direction is North, the position should be (0,1)", () => {
      moveTo(Direction.North, { x: 0, y: 1 })
    });
    it("If the current direction is West, the position should be (-1,0)", () => {
      moveTo(Direction.West, { x: -1, y: 0 })
    });
    it("If the current direction is East, the position should be (1,0)", () => {
      moveTo(Direction.East, { x: 1, y: 0 })
    });
    it("If the current direction is South, the position should be (0,-1)", () => {
      moveTo(Direction.South, { x: 0, y: -1 })
    });
  });
  //后退
  describe("move to back", () => {
    const backTo = (direction, outputPosition) => {
      const car = new Car(new Positon(0, 0), direction);
      car.back();
      expect(car.getState()).toEqual({
        ...outputPosition,
        direction: direction
      })
    }
    it("If the current direction is North, the position should be (0,1)", () => {
      backTo(Direction.North, { x: 0, y: -1 })
    });
    it("If the current direction is West, the position should be (-1,0)", () => {
      backTo(Direction.West, { x: 1, y: 0 })
    });
    it("If the current direction is East, the position should be (1,0)", () => {
      backTo(Direction.East, { x: -1, y: 0 })
    });
    it("If the current direction is South, the position should be (0,-1)", () => {
      backTo(Direction.South, { x: 0, y: 1 })
    });
  });
  it.todo('execute');
  //执行指令数组
  // describe("execute", () => {
  //   it("执行指令", () => {
  //     const car = new Car(new Positon(0, 0), Direction.North);
  //     car.execute(['M']);
  //     expect(car.getState()).toEqual({
  //       x: 0,
  //       y: 0,
  //       direction: Direction.North
  //     })
  //   })
  // })
})



