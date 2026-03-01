import assert from "node:assert/strict";
import test from "node:test";

import {
  CURSOR_SCROLL_IDLE,
  applyScrollImpulse,
  easeScrollMotion,
} from "./simple-cursor-scroll-motion.ts";

test("positive wheel input pushes the cursor dot downward", () => {
  const next = applyScrollImpulse(CURSOR_SCROLL_IDLE, 120);

  assert.equal(next.offsetY > 0, true);
  assert.equal(next.scaleY > 1, true);
  assert.equal(next.scaleX < 1, true);
});

test("negative wheel input pushes the cursor dot upward", () => {
  const next = applyScrollImpulse(CURSOR_SCROLL_IDLE, -120);

  assert.equal(next.offsetY < 0, true);
  assert.equal(next.scaleY > 1, true);
});

test("scroll motion clamps under large wheel deltas", () => {
  const next = applyScrollImpulse(CURSOR_SCROLL_IDLE, 5000);

  assert.equal(next.offsetY <= 10, true);
  assert.equal(next.scaleY <= 1.65, true);
  assert.equal(next.scaleX >= 0.72, true);
});

test("easing pulls the motion back toward idle", () => {
  const active = applyScrollImpulse(CURSOR_SCROLL_IDLE, 120);
  const eased = easeScrollMotion(active, CURSOR_SCROLL_IDLE, 0.25);

  assert.equal(eased.offsetY < active.offsetY, true);
  assert.equal(eased.scaleY < active.scaleY, true);
  assert.equal(eased.scaleX > active.scaleX, true);
});
