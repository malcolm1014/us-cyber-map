# Making the map more resourceful — research-backed roadmap

A deep dive into how large, successful communities help newcomers *find their
people and get in the door*, translated into concrete features for this map.

> **Build status (Oct 2026):** items **1–5 of the shortlist are shipped** —
> add-to-calendar `.ics`, the Suggest-edit / Add-a-resource GitHub flow (+ two
> issue templates), the beginner-friendly flag & filter (925 rows tagged), the
> "Start here" persona picker, and nearby/related pins + collection presets.
> Item 6 (a dedicated accessibility pass) is the remaining open item.

**Who this is for:** the two audiences in the README — the "average con-goer"
and the "lifelong learner" (kid discovering hacking, student picking a program,
adult career-changer).

**Hard constraints this map lives under** (every idea below respects them):

- **Zero build.** One `index.html`, plus `data.js` / `regions.js`. No bundler,
  no framework, no API keys.
- **No login, no tracking, no cost.** Nothing that needs accounts or a backend.
- **`data.js` is the only file you edit** to change resources.
- Already shipped (so these are *not* in the list below): category / sector /
  topic / cert filters, name+city search with jump-to, near-me, search-a-place,
  open-now (SpaceAPI), favorites, the Upcoming digest, shareable-URL state,
  share-a-pin, clustering, directions, light/dark tiles, PWA offline + install,
  mobile Map/List tabs, cert cliff-notes.

So the map is already an excellent **filter-and-find** tool. The gaps the
research exposes are three: it doesn't **guide a newcomer** who doesn't yet know
what to filter for; it has **no low-friction way for the community to keep it
fresh** (the thing I just had to fix 100 stale dates by hand); and its **events
and pins are informational, not actionable**.

---

## What I studied, and the one lesson from each

| Space | What they do well | The transferable lesson |
|---|---|---|
| **OpenStack / OpenInfra** — Upstream Institute | A free, hands-on, *structured* "first contribution" class + a mentoring program afterward | Newcomers need a **guided path**, not just a reference. "Here's your first step" beats "here's everything." |
| **GitHub** — Explore / topics / `good first issue` | Subject topic-pages, a per-repo `/contribute` page, and a **`good first issue` label** maintainers apply | A dedicated **"beginner-friendly" signal** is the single highest-value label for onboarding. |
| **GitHub Education** — Student Pack, Learning Paths, Campus Experts | Persona-scoped bundles ("Web Dev", "Data Science") and student-leader roles | **Persona-scoped collections** ("for students", "for teens") convert a big catalog into an obvious starting point. |
| **OWASP** — local chapters | Free/open, "you don't need to be an expert," mailing list **+ Slack**, "just show up" | The decisive info is **how to get in the door** (RSVP? just show up? Slack/Discord?). |
| **OpenStreetMap** — Notes | Anyone, **no account**, drops a "report a problem" marker that mappers resolve | A no-login **"something's wrong / something's missing here"** channel keeps data current. |
| **Wikipedia** — Growth team newcomer tasks | A feed of small suggested edits; raised first-edit rate **+11.6%** and 2-week edits **+22%** | Make contributing a series of **tiny, obvious micro-tasks**, not one big ask. |
| **hackerspaces.org / SpaceAPI** | Directory you join **by pull request**; marker colour = open/closed | Community-owned data + **"add your space via PR"** is a proven freshness model (and this map already consumes SpaceAPI for open-now). |
| **TryHackMe / roadmap guides** | A beginner sequence (networking → Linux → tools → practice → certs) + a **career quiz** | Learners want a **"what do I do first"** ordering and a 60-second self-placement. |
| **CTFtime / picoCTF** | "A calendar of events"; advice to start on **picoCTF / TryHackMe** before competing | Events should be **actionable** (add-to-calendar) and flagged by **difficulty / beginner-friendliness**. |

Sources are listed at the end.

---

## The recommendations, by theme

Each is rated **Impact** (for the two target audiences) and **Effort** (within
the zero-build/no-login constraints). ★ = low, ★★★ = high.

### Theme 1 — "Where do I start?" (the biggest gap)

> Patterns: OpenStack Upstream Institute · Wikipedia newcomer tasks · GitHub
> Education Learning Paths · TryHackMe roadmap + career quiz.

**1a. A "Start here" persona picker.** A small first-run card (and a persistent
"New here?" button) offering 3–4 personas:

- **Kid / teen (under 18)** → `youth` + `library` + nearby `maker`; first-steps
  card points to picoCTF and CyberPatriot.
- **Student** → `school` + student clubs + cheap community `con`s (BSides) +
  `ctf`.
- **Career-changer / adult** → `meetup` (2600, DEF CON groups) + `con` +
  `hamradio` + `testing` (cert exam centres) + `accelerator`.
- **Just curious / hobbyist** → `maker` + `meetup` + `con`.

Each persona simply **pre-applies an existing filter combination** and shows a
3-line "your first three moves" card. **This reuses the filter + shareable-URL
engine you already have** — a persona is just a saved query (e.g.
`?cat=youth,library,maker`). *Impact ★★★ · Effort ★★* (mostly a preset table +
one card component).

**1b. "Newcomer notes" inside popups.** One optional data field, surfaced as a
friendly line in the popup: *"New? Most villages welcome first-timers — the
lockpick and CTF villages are the easiest doors."* Borrowed from OWASP's
"just show up" clarity and TryHackMe's "start with web/forensics" advice.
*Impact ★★ · Effort ★★* (data work, additive field).

**1c. A 6-question "find your path" quiz** (TryHackMe career-quiz model),
pure client-side, output = a persona preset from 1a. Nice-to-have once 1a
exists. *Impact ★★ · Effort ★★.*

### Theme 2 — Keep the map fresh without a backend (fixes the staleness I just hand-patched)

> Patterns: OSM Notes · GitHub prefilled issues · hackerspaces "add via PR" ·
> Wikipedia micro-tasks.

**2a. "Suggest an edit / Report a problem" link** on every resource, and an
**"Add a resource"** link in the header. Both open a **pre-filled GitHub issue**
via URL parameters — no backend, no secret, no login barrier beyond a free
GitHub account (the same bar hackerspaces.org and OSM power-users accept):

```
https://github.com/malcolm1014/us-cyber-map/issues/new
   ?title=Fix:%20<resource name>
   &labels=data-fix
   &body=<resource name> — <city>%0A%0AWhat's wrong / what changed:%0A%0ASource URL:
```

Pair it with two `.github/ISSUE_TEMPLATE` forms ("Add a resource", "Fix or
report a problem") so submissions arrive structured and easy for you to merge
into `data.js`. This is the **single most strategic feature**: it turns the
stale-date problem from "Malcolm re-verifies 100 events by hand" into "the
community flags what changed." *Impact ★★★ · Effort ★★.*

**2b. Auto-surface "needs verification" entries.** The README already defines
entries with an empty `url` + a "verify" note. Add a tiny **"help verify these"**
view (reuses the list panel) so contributors have a Wikipedia-style queue of
micro-tasks. *Impact ★★ · Effort ★.*

**2c. Freshness guards (mostly already handled — keep them working).** Good
news: the Upcoming panel *already* hides past events (`.filter(r => r.next &&
!isPast(r))`, index.html ~line 1723), so a missed refresh no longer shows
finished cons as "upcoming." The residual risk is stale `next:` dates sitting on
markers (the "expired" flag) — which is exactly what `scripts/audit.js` catches.
So the real guard isn't new UI; it's **(i) run `node scripts/audit.js` on a
cadence** (or wire it into a cheap GitHub Action) and **(ii) the community
suggest-edit channel in 2a**, which is what actually scales. *Impact ★★ ·
Effort ★* (process + 2a, not app code).

### Theme 3 — Make events and pins *actionable*

> Patterns: CTFtime-as-calendar · client-side `.ics` generation.

**3a. "Add to calendar" on every dated event** (Upcoming panel + con popups).
Generate the `.ics` client-side as a `data:text/calendar` / Blob download — no
library needed, ~15 lines. Works with Apple/Google/Outlook. The map becomes a
*planning* tool, not just a *finding* tool. *Impact ★★★ · Effort ★.*

**3b. Surface CFP + "first-time speaker" cues.** You already carry `cfpUrl` /
`cfpDeadline`. Add a one-line nudge on CFP-open cons — community cons (BSides,
2600-adjacent) are where first-time speakers actually break in. *Impact ★★ ·
Effort ★.*

### Theme 4 — A "beginner-friendly" signal (the `good first issue` of this map)

> Patterns: GitHub `good first issue` · CTFtime difficulty · WWHF being
> "famously beginner-friendly" already noted in your data.

**4a. A `beginner:true` flag + a "Beginner-friendly 🟢" filter chip.** Tag the
resources that genuinely welcome newcomers (free/cheap cons with villages,
"just show up" meetups, youth programs, picoCTF-style CTFs). This is the
highest-leverage *label* in all the research — GitHub proved one beginner signal
drives onboarding more than any amount of browsing. Reuses your existing chip +
filter + URL engine. *Impact ★★★ · Effort ★★* (mostly the data pass to decide
who qualifies; the notes already hint it in many rows).

### Theme 5 — Discovery: "show me what's related"

> Patterns: GitHub topic-pages / collections / personalized recommendations.

**5a. "Nearby & related" in each popup.** A 3-item mini-list: nearest resources
in a complementary category (e.g. a con popup → "DEF CON group · hackerspace ·
cert testing centre near here"). Pure client-side off existing coords/data; it
turns one pin into a connected journey. *Impact ★★ · Effort ★★.*

**5b. Curated "collections" (saved filter presets).** GitHub-collections style,
but they're just shareable URLs: *"Totally free & no-signup," "Attend from
anywhere (online)," "Great for teens," "Weekend road-trip cons."* Same mechanism
as personas (Theme 1). *Impact ★★ · Effort ★.*

### Theme 6 — Accessibility (so "average learner" includes everyone)

> Patterns: Leaflet accessibility guide · WCAG 2.2 · NPS NPMap.

**6a. Marker/popup keyboard + screen-reader pass.** Leaflet gives a keyboard
base, but the research flags concrete fixes: `role="button"` on markers so
Enter/Space opens the popup in NVDA, move focus into the popup on open and back
on close, ensure every control is labelled, and honour `prefers-reduced-motion`
on the fly-to animations. Your **List tab already is the text-alternative** WCAG
wants — this just makes the map itself reach the same bar. *Impact ★★ ·
Effort ★★.*

---

## Suggested order of work (quick wins first)

| # | Feature | Impact | Effort | Why this order |
|---|---|---|---|---|
| 1 | **3a** Add-to-calendar `.ics` | ★★★ | ★ | High delight, ~15 lines, no deps, doesn't touch the look. |
| 2 | **2a** Suggest-edit / Add-resource issues | ★★★ | ★★ | Solves freshness permanently; makes it a community map. |
| 3 | **4a** Beginner-friendly flag + chip | ★★★ | ★★ | The highest-value onboarding label in the research. |
| 4 | **1a** "Start here" persona picker | ★★★ | ★★ | Closes the biggest gap; reuses the filter engine. |
| 5 | **5a/5b** Related + collections | ★★ | ★–★★ | Deepens discovery once the above land. |
| 6 | **6a** Accessibility pass | ★★ | ★★ | Broadens the audience; do before a bigger launch. |

Items 1–2 are genuinely small and could ship together without touching the
map's look. 3 and 4 are mostly **data decisions** (who's beginner-friendly, what
each persona filters to) plus small UI, which play to your strengths. (Freshness
item **2c** is process, not code — see above.)

---

## Sources

- OpenStack Upstream Institute — https://docs.openstack.org/upstream-training/ ; OpenInfra mentoring — https://openinfra.org/blog/2021-openinfra-annual-report-openinfra-community-mentoring-programs
- GitHub `good first issue` / Explore — https://github.blog/open-source/maintainers/browse-good-first-issues-to-start-contributing-to-open-source
- GitHub Education (Student Pack, Learning Paths, Campus Experts) — https://education.github.com/pack ; https://education.github.com/students/experts
- OWASP local chapters / getting involved — https://owasp.org/join-community ; https://owasp.org/chapter-starter-kit
- OpenStreetMap Notes / "Fix the map" — https://www.openstreetmap.org/fixthemap ; https://wiki.openstreetmap.org/wiki/Error_reporting
- Wikipedia Growth newcomer tasks — https://www.mediawiki.org/wiki/Growth/Feature_summary
- SpaceAPI directory & tooling — https://spaceapi.io/how-to-use ; https://spaceapi.io/
- TryHackMe beginner roadmap — https://tryhackme.com/hacktivities ; roadmap.sh (cybersecurity roadmap)
- CTFtime / picoCTF beginner guidance — https://csc.fau.edu/compete/ctf/getting-started/
- Client-side `.ics` generation — https://unpkg.com/calendar-link@2.11.0/README.md
- Leaflet accessibility — https://leafletjs.com/examples/accessibility/ ; WCAG 2.2 Understanding docs
- GitHub prefilled-issue contribution pattern — https://docs.github.com/ (new-issue URL query parameters)

*Compiled October 2026. Dates and program details drift — reconfirm before
relying on any specific figure.*
