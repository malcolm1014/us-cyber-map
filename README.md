# US Cyber Resource Map

Interactive Leaflet map of the US hacker / cybersecurity community — the
anchors people actually use to get connected: hacker cons, DEF CON groups,
2600 meetings, OWASP chapters and other meetups, hackerspaces, top cyber
schools, library makerspace programs, student STEM/cyber pipelines, and
government/research hubs. **Two-tier drill-down:** pick a region, then a
state — every state and DC/PR has at least one entry.

Built on the same zero-build architecture as the companion
**florida-cyber-map** (which remains the deep-dive for Florida; only its
statewide anchors are repeated here).

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app — Leaflet + markercluster from CDN, no build step, no API keys |
| `data.js` | **The only file you edit** to add/remove/fix resources |
| `regions.js` | Generated region borders (5 US super-regions from state polygons) |
| `scripts/make-regions.js` | Regenerates `regions.js` from a `us-states.json` GeoJSON |

## Regions

1. **Northeast** — CT ME MA NH RI VT NJ NY PA DE MD DC
2. **Southeast** — VA WV KY TN NC SC GA FL AL MS AR LA (+PR)
3. **Midwest** — OH MI IN IL WI MN IA MO ND SD NE KS
4. **Southwest** — TX OK NM AZ
5. **West** — CO WY MT ID UT NV WA OR CA AK HI

## Categories

`con` · `meetup` · `maker` · `school` · `library` (library makerspaces) ·
`youth` (student STEM & cyber) · `gov`

## Editing data

Open `data.js` — the header comment documents the row format. Every row
carries `st:"XX"` (state code, drives the state drill-down) and may carry
`org:` (who runs it — only when verifiable; sponsors rotate yearly and
belong on the linked site, not in this file). Rules of the house:
coordinates are approximate (city-level is fine), **never guess contact
details** (leave `url`/`address`/`phone` empty instead), and only set
`next:` dates you've verified — they drive the Upcoming panel and
expired-date flagging.

Entries with an empty `url` and a "verify" note are real, known community
fixtures whose current web presence wasn't confirmed at sweep time —
confirm before traveling.

## Running

Open `index.html` in a browser. That's it. (Tiles and Leaflet come from
CDNs, so it needs internet.)

Data sweep: **July 2026**. Verified 2026 dates at sweep time: DEF CON 34
(Aug 6–9), Black Hat USA (Aug 1–6), HOPE 26 (Aug 14–16), GrrCON
(Sept 24–25), Wild West Hackin' Fest Deadwood (Oct 7–9), SAINTCON
(Oct 27–30), BSides Orlando (Sept 25–26).
