import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";

const cursorSource = readFileSync(new URL("./simple-cursor.tsx", import.meta.url), "utf8");
const globalsSource = readFileSync(new URL("../../app/globals.css", import.meta.url), "utf8");

test("custom cursor activates a document class to suppress native cursors on hover targets", () => {
  assert.match(cursorSource, /document\.body\.classList\.add\("custom-cursor-active"\)/);
  assert.match(cursorSource, /document\.body\.classList\.remove\("custom-cursor-active"\)/);
});

test("global styles force native cursor off while the custom cursor is active", () => {
  assert.match(globalsSource, /\.custom-cursor-active,\s*\.custom-cursor-active \*/);
  assert.match(globalsSource, /cursor:\s*none\s*!important/);
});
