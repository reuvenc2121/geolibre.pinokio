// Registers Hebrew in GeoLibre's language selector (apps/geolibre-desktop/src/i18n/languages.ts).
// Idempotent: safe to run after every clone or pull. The catalog itself (he.json) is copied
// separately by the launcher into src/i18n/locales/, where GeoLibre auto-discovers it.
const fs = require("fs")
const path = require("path")

const file = path.join(__dirname, "..", "app", "apps", "geolibre-desktop", "src", "i18n", "languages.ts")
const entry = '  he: { nativeName: "עברית", englishName: "Hebrew" },'

let src = fs.readFileSync(file, "utf8")
if (/^\s*he:\s*\{/m.test(src)) {
  console.log("Hebrew already registered in languages.ts")
  process.exit(0)
}
const anchor = /^(\s*en:\s*\{[^\n]*\},?)\s*$/m
if (!anchor.test(src)) {
  console.error("Could not find the LANGUAGE_NAMES `en` entry in " + file)
  process.exit(1)
}
src = src.replace(anchor, (line) => line + "\n" + entry)
fs.writeFileSync(file, src)
console.log("Registered Hebrew in languages.ts")
