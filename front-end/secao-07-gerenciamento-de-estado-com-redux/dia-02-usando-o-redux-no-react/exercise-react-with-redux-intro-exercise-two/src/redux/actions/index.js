export const MOVE_CAR = 'MOVE_CAR';

export const moveCarAction = (car, side) => ({
  type: MOVE_CAR,
  car,
  side,
});
