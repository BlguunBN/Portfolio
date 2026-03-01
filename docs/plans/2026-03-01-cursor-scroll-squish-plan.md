# Cursor Scroll Squish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a subtle scroll-driven stretch/squish animation to the custom cursor's center dot.

**Architecture:** Keep the feature inside the existing client cursor component and move the scroll-motion math into a pure helper module. Drive the animation with refs and the existing `requestAnimationFrame` loop so the cursor remains smooth and does not re-render on wheel input.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Node 24 `node:test`

---

### Task 1: Add a failing test for scroll-motion mapping

**Files:**
- Create: `src/components/ui/simple-cursor-scroll-motion.ts`
- Create: `src/components/ui/simple-cursor-scroll-motion.test.ts`

**Step 1: Write the failing test**

Add tests that assert:

- positive wheel input pushes the dot downward
- negative wheel input pushes the dot upward
- scroll input increases vertical scale and decreases horizontal scale
- easing pulls the motion state back toward idle

**Step 2: Run test to verify it fails**

Run: `node --test --experimental-strip-types src/components/ui/simple-cursor-scroll-motion.test.ts`

Expected: FAIL because the helper module does not exist yet.

**Step 3: Write minimal implementation**

Implement:

- an idle motion constant
- a function that maps wheel delta to a clamped motion state
- a function that eases one motion state toward another

**Step 4: Run test to verify it passes**

Run: `node --test --experimental-strip-types src/components/ui/simple-cursor-scroll-motion.test.ts`

Expected: PASS

### Task 2: Wire the helper into the cursor component

**Files:**
- Modify: `src/components/ui/simple-cursor.tsx`

**Step 1: Integrate the helper**

- import the helper functions
- add a `wheel` listener
- keep motion in refs/local variables, not React state
- apply scroll offset and scale to the center dot
- keep the ring tracking logic mostly unchanged

**Step 2: Verify the contract**

Run:

- `node --test --experimental-strip-types src/components/ui/simple-cursor-scroll-motion.test.ts`
- `node --test --experimental-strip-types src/components/ui/simple-cursor-contract.test.ts`

Expected:

- both test files pass

### Task 3: Final verification

**Files:**
- Verify only

**Step 1: Run final checks**

Run:

- `node --test --experimental-strip-types src/components/ui/simple-cursor-scroll-motion.test.ts`
- `node --test --experimental-strip-types src/components/ui/simple-cursor-contract.test.ts`
- `npx eslint src/components/ui/simple-cursor.tsx src/components/ui/simple-cursor-scroll-motion.ts src/components/ui/simple-cursor-scroll-motion.test.ts src/components/ui/simple-cursor-contract.test.ts`
- `npm run build`

**Step 2: Confirm outcomes**

- all targeted tests pass
- targeted lint passes
- production build passes
