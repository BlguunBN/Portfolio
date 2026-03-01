export type CursorScrollMotion = {
  offsetY: number;
  scaleX: number;
  scaleY: number;
};

export const CURSOR_SCROLL_IDLE: CursorScrollMotion = {
  offsetY: 0,
  scaleX: 1,
  scaleY: 1,
};

const MAX_OFFSET = 10;
const MIN_SCALE_X = 0.72;
const MAX_SCALE_Y = 1.65;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function applyScrollImpulse(
  state: CursorScrollMotion,
  deltaY: number,
): CursorScrollMotion {
  if (deltaY === 0) return state;

  const direction = deltaY > 0 ? 1 : -1;
  const intensity = clamp(Math.abs(deltaY) / 120, 0, 1);

  return {
    offsetY: clamp(state.offsetY + direction * (2.5 + intensity * 7.5), -MAX_OFFSET, MAX_OFFSET),
    scaleX: clamp(Math.min(state.scaleX, 1 - (0.1 + intensity * 0.18)), MIN_SCALE_X, 1),
    scaleY: clamp(Math.max(state.scaleY, 1 + 0.16 + intensity * 0.49), 1, MAX_SCALE_Y),
  };
}

export function easeScrollMotion(
  current: CursorScrollMotion,
  target: CursorScrollMotion,
  ease: number,
): CursorScrollMotion {
  return {
    offsetY: current.offsetY + (target.offsetY - current.offsetY) * ease,
    scaleX: current.scaleX + (target.scaleX - current.scaleX) * ease,
    scaleY: current.scaleY + (target.scaleY - current.scaleY) * ease,
  };
}
