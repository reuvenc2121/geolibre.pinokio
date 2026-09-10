module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/opengeos/GeoLibre.git app"
        ]
      }
    },
    {
      method: "fs.copy",
      params: {
        src: "hebrew/he.json",
        dest: "app/apps/geolibre-desktop/src/i18n/locales/he.json"
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "node hebrew/patch-languages.js"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "npm install"
        ]
      }
    }
  ]
}
