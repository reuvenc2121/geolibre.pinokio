module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git checkout -- apps/geolibre-desktop/src/i18n/languages.ts",
          "git pull"
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
        message: "npm install"
      }
    }
  ]
}
