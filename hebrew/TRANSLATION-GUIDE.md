# Hebrew translation guide for GeoLibre UI strings

Used when translating new keys from `en.json` into `he.json` (for a human or an AI translator).

INPUT: a flat JSON object `{ "dotted.key": "English text", ... }`.
OUTPUT: a flat JSON object with EXACTLY the same keys, in the same order, whose values are the Hebrew translations. Valid JSON only, UTF-8, 2-space indent, no comments, no trailing commas.

## Hard rules (a validator rejects the file otherwise)

1. Every key from the input must appear in the output, and no extra keys.
2. Keep every i18next placeholder byte-for-byte unchanged: `{{name}}`, `{{count}}`, `{{value, number}}`, etc. Never translate or alter what is inside `{{ }}`. Reorder them in the sentence as Hebrew grammar needs.
3. Keep HTML/component tags unchanged (`<0>`, `</0>`, `<strong>`, `<br/>`), keep `\n` newlines, keep leading/trailing spaces, keep ellipsis `…`/`...` as in source, keep backticks and `**bold**`.
4. Keep untranslated: product/brand/format names (GeoLibre, MapLibre, GeoJSON, GeoTIFF, GeoParquet, COG, PMTiles, MBTiles, WMS, WMTS, WFS, STAC, ArcGIS, PostGIS, DuckDB, Whitebox, Hugging Face, Mapillary, NASA, USGS, Overture, Cesium, CZML, KML, Jupyter, Python, SQL, CSV, GPX, Shapefile, NetCDF, Zarr, H3, S2, EPSG, CRS, URL, API, ID, JSON, PNG, JPEG, PDF, SVG, GPU, WebGL, RGB, DEM, NDVI…), file extensions, code identifiers, keyboard keys (Ctrl, Shift, Alt, Enter, Esc), units (m, km, ft, px, MB, GB), and anything that looks like code, an expression, a regex, or a command.
5. Plural keys ending in `_one` / `_other`: translate both (singular / plural). Keep `{{count}}` inside. (`_two` forms are generated automatically from `_other`.)
6. Values that are tokens rather than sentences (enum values, coordinate format tokens, URLs, example placeholders) stay as-is when translating would break meaning; translate them when they are human-readable labels.

## Style

- Modern, natural, concise Israeli Hebrew as used in professional software UIs. Not biblical, not overly formal.
- Buttons: short imperative ("שמור", "בטל", "ייצא"). Longer instructions: gender-neutral phrasing when natural ("יש לבחור שכבה").
- Keep translations roughly as short as the English (UI space is limited).

## Glossary (use consistently)

layer=שכבה, layers=שכבות, basemap=מפת בסיס, map=מפה, project=פרויקט, dataset=מערך נתונים, data source=מקור נתונים, feature=ישות, features=ישויות, attribute=מאפיין, attribute table=טבלת מאפיינים, field=שדה, column=עמודה, row=שורה, geometry=גאומטריה, point=נקודה, line=קו, polygon=פוליגון, raster=רסטר, vector=וקטור, tile=אריח, tiles=אריחים, zoom=זום, zoom level=רמת זום, extent=תיחום, bounds=גבולות, bounding box=תיבה תוחמת, coordinate=קואורדינטה, coordinate system / CRS=מערכת קואורדינטות, projection=היטל, latitude=קו רוחב, longitude=קו אורך, elevation=גובה, terrain=פני שטח, style=סגנון, symbology=סימבולוגיה, legend=מקרא, label=תווית, labels=תוויות, opacity=אטימות, fill=מילוי, stroke=קו מתאר, outline=קו מתאר, color=צבע, color ramp=סולם צבעים, band=ערוץ, pixel=פיקסל, resolution=רזולוציה, buffer=חיץ, clip=חיתוך, intersect=חפיפה, union=איחוד, dissolve=מיזוג, merge=מיזוג, join=צירוף, filter=סינון, query=שאילתה, expression=ביטוי, selection=בחירה, select=בחר, export=ייצוא (button: ייצא), import=ייבוא (button: ייבא), download=הורדה (button: הורד), upload=העלאה (button: העלה), save=שמור, save as=שמירה בשם, open=פתח, close=סגור, cancel=ביטול, apply=החל, reset=איפוס, delete=מחק, remove=הסר, rename=שינוי שם, duplicate=שכפל, undo=בטל פעולה, redo=בצע שוב, settings=הגדרות, preferences=העדפות, plugin=תוסף, plugins=תוספים, panel=חלונית, toolbar=סרגל כלים, sidebar=סרגל צד, dialog=חלון דו-שיח, tab=כרטיסייה, workspace=סביבת עבודה, processing=עיבוד, tool=כלי, tools=כלים, run=הרץ, loading=טוען…, error=שגיאה, warning=אזהרה, success=הצלחה, failed=נכשל, unknown=לא ידוע, none=ללא, default=ברירת מחדל, custom=מותאם אישית, advanced=מתקדם, preview=תצוגה מקדימה, search=חיפוש, geocode=גאוקודינג, bookmark=סימנייה, measure=מדידה, distance=מרחק, area=שטח, print=הדפסה, print layout=פריסת הדפסה, share=שיתוף, offline=לא מקוון, online=מקוון, cache=מטמון, local=מקומי, remote=מרוחק, server=שרת, browser=דפדפן, file=קובץ, folder=תיקייה, notebook=מחברת, console=מסוף, assistant=עוזר, AI=AI, model=מודל, segmentation=סגמנטציה, object detection=זיהוי אובייקטים, time series=סדרה עתית, timeline=ציר זמן, animation=אנימציה, tour=סיור, storymap=StoryMap (proper name; "מפת סיפור" in prose), dashboard=לוח מחוונים, collaborate=שיתוף פעולה, comment=הערה, GPS=GPS, location=מיקום, track=מסלול, waypoint=נקודת ציון, graticule=רשת קווי אורך ורוחב, grid=רשת, cell=תא, hexagon=משושה, viewport=תצוגה, stretch=מתיחה.
