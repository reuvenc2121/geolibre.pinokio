# GeoLibre Pinokio launcher

This launcher installs and runs the browser edition of [GeoLibre](https://github.com/opengeos/GeoLibre), a free and open-source GIS for visualizing, exploring, and analyzing geospatial data. GeoLibre keeps local data in the browser and supports maps, vector and raster data, spatial SQL, styling, processing tools, plugins, and project files.

## Use

1. Open **GeoLibre** in Pinokio.
2. Click **Install**. Pinokio clones GeoLibre into `app/` and installs its npm workspace dependencies.
3. Click **Start**. Pinokio selects an available local port and opens **Open Web UI** when Vite is ready.
4. Use **Update** to pull the launcher and upstream app changes and refresh npm dependencies.
5. Use **Reset** to delete the cloned app and its installed dependencies. Run **Install** again to start clean.

The launcher runs GeoLibre's cross-platform browser build on `127.0.0.1`. Features that require the native Tauri desktop application—such as desktop filesystem dialogs and some native local-file integrations—are outside this launcher. Some browser features lazily fetch third-party runtimes or map data and therefore need internet access on first use. The optional self-hosted JupyterLite Notebook bundle is not built by GeoLibre's default Node-only development flow, so that panel reports that it is unavailable unless its separate Python build dependencies are installed upstream.

## Programmatic access

GeoLibre's browser build is primarily an interactive, client-side application; it does not expose a general-purpose REST API. Its supported URL interface can load a public `.geolibre.json` project and control the embedded layout with query parameters such as `url`, `layout`, `toolbar`, `panels`, `maponly`, and `theme`.

Copy the dynamic address shown by **Open Web UI** into `GEOLIBRE_URL` before using these examples.

### JavaScript

```javascript
const base = process.env.GEOLIBRE_URL ?? "http://127.0.0.1:5173"
const project = "https://share.geolibre.app/giswqs/3d-tiles.geolibre.json"
const query = new URLSearchParams({ url: project, layout: "compact", theme: "dark" })
const appUrl = `${base}/?${query}`

const response = await fetch(appUrl)
if (!response.ok) throw new Error(`GeoLibre returned ${response.status}`)
console.log(appUrl)
```

### Python

```python
import os
from urllib.parse import urlencode
from urllib.request import urlopen

base = os.environ.get("GEOLIBRE_URL", "http://127.0.0.1:5173")
query = urlencode({
    "url": "https://share.geolibre.app/giswqs/3d-tiles.geolibre.json",
    "layout": "compact",
    "theme": "dark",
})
app_url = f"{base}/?{query}"

with urlopen(app_url, timeout=10) as response:
    if response.status != 200:
        raise RuntimeError(f"GeoLibre returned {response.status}")
print(app_url)
```

### Curl

```bash
export GEOLIBRE_URL="http://127.0.0.1:5173"
curl --fail --head "$GEOLIBRE_URL/"
curl --fail --get "$GEOLIBRE_URL/" \
  --data-urlencode "url=https://share.geolibre.app/giswqs/3d-tiles.geolibre.json" \
  --data-urlencode "layout=compact" \
  --data-urlencode "theme=dark" \
  --output /dev/null
```

These requests verify and construct the browser entry point. GIS operations themselves run inside the loaded application rather than through HTTP endpoints.
