import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import assert from "node:assert/strict";

const root = resolve(import.meta.dirname, "..");
const paths = {
  html: resolve(root, "Builds/web-demo/index.html"),
  css: resolve(root, "Builds/web-demo/styles.css"),
  js: resolve(root, "Builds/web-demo/game.js"),
  config: resolve(root, "Data/config/web_demo_balance.json"),
  server: resolve(root, "Tools/web-demo-server.mjs")
};

for (const [name, path] of Object.entries(paths)) {
  assert.equal(existsSync(path), true, `${name} is missing: ${path}`);
}

const html = readFileSync(paths.html, "utf8");
assert.match(html, /game-canvas/, "HTML should include the canvas");
assert.match(html, /styles\.css/, "HTML should load styles.css");
assert.match(html, /game\.js/, "HTML should load game.js");

const config = JSON.parse(readFileSync(paths.config, "utf8"));
assert.equal(config.economy.startingGold > 0, true, "starting gold must be positive");
assert.equal(config.level.features.some((feature) => feature.type === "landmark"), true, "level needs a landmark target");
assert.equal(config.level.features.some((feature) => feature.type === "wall"), true, "level needs a wall node");
assert.equal(config.level.features.some((feature) => feature.type === "tower"), true, "level needs a tower node");

console.log("web demo smoke test passed");
