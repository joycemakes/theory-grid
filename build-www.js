// Copies the game into www/ for the Android app build.
const fs = require("fs"), path = require("path");
const out = path.join(__dirname, "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "fonts"), { recursive: true });
for (const f of ["index.html", "questions.js", "manifest.webmanifest", "icon-192.png", "icon-512.png"]) fs.copyFileSync(path.join(__dirname, f), path.join(out, f));
for (const f of fs.readdirSync(path.join(__dirname, "fonts"))) fs.copyFileSync(path.join(__dirname, "fonts", f), path.join(out, "fonts", f));
console.log("www ready");
