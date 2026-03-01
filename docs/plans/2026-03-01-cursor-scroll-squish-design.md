# Cursor Scroll Squish Design

**Date:** March 1, 2026

**Goal:** Improve the custom cursor with a subtle scroll animation that feels responsive without adding visual clutter.

## Approved Interaction

Use a dot-first vertical stretch/squish effect:

- the center dot stretches vertically when the user scrolls
- the dot squishes horizontally at the same time
- scroll up biases the dot upward
- scroll down biases the dot downward
- the outer ring mostly keeps its current trailing behavior
- the effect quickly settles back to the idle cursor

## Constraints

- keep the custom cursor lightweight and local to the current component
- do not reintroduce the previous liquid droplet behavior
- keep hover handling for native cursor suppression intact
- keep reduced-motion and coarse-pointer early exits intact
- avoid React state for per-frame motion

## Technical Direction

- extract wheel-to-motion math into a small pure helper module
- listen for `wheel` in the cursor effect and update a target motion ref
- ease the target back to idle inside the existing `requestAnimationFrame` loop
- apply the scroll motion to the center dot transform while keeping the ring stable

## Validation

- custom cursor still tracks the pointer normally
- hovering buttons/links still hides the native cursor
- scroll input produces a visible but controlled stretch/squish
- the dot returns to normal after scrolling stops
- reduced-motion users still do not get the effect
