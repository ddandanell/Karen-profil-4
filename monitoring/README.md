# UAE Pet Relocation Weekly Intent Monitoring

This tracker monitors weekly search intent in Dubai/UAE for:
- **dog relocation**
- **pet transport**

It captures:
1. New articles and forum threads.
2. Competitor blog posts from UAE pet services.
3. Keyword ranking + search-volume shifts.
4. Emerging signals (e.g., abandonment spikes, relocation surges during regional tensions).
5. Most frequent user pain points from Reddit/social posts about move costs.

## 1) Alert setup (one-time)

### Google Alerts
Create alerts for each query below and deliver to a dedicated monitoring email/slack webhook:

- `"dog relocation" Dubai`
- `"pet transport" Dubai`
- `"pet relocation" UAE`
- `"pet export" UAE`
- `site:reddit.com dubai pet relocation cost`
- `site:facebook.com dubai pet relocation`
- `site:expatwoman.com pet relocation dubai`

Settings:
- Frequency: **At most once a day**
- Sources: **Automatic**
- Region: **Any region**
- Language: **English + Arabic**
- Deliver to: monitoring inbox

### Social listening quick checks
- Reddit: `r/dubai`, `r/UAE`, `r/expats`
- X/LinkedIn search terms: `pet relocation dubai`, `pet transport uae`, `moving pets uae`
- Local forums: ExpatWoman, Dubai Pet Owners groups

### Competitor watchlist (seed)
Track latest blog/news pages from:
- Sandy Paws
- DKC Veterinary Clinic
- The Petshop / Pet travel partners
- Any UAE freight/pet shipping specialist

Add new competitors in `monitoring/data/competitors.json`.

## 2) Weekly workflow

1. Update `monitoring/data/weekly-input.json` with this week’s keyword metrics and sources.
2. Run:

```bash
node scripts/update-pet-intent-tracker.mjs
```

3. Review generated report in `monitoring/reports/latest-weekly-report.md`.
4. Share report + notable anomalies with the growth/content team.

## 3) Data format

- `weekly-input.json`
  - `weekStart`, `weekEnd`
  - `keywords`: each with `term`, `rank`, `prevRank`, `searchVolume`, `prevSearchVolume`
  - `newContent`: `articles`, `forums`, `competitorPosts`
  - `socialPainPoints`: list of observed discussion points with counts
  - `regionalSignals`: trend notes tied to macro events

## 4) Output highlights

The report includes:
- Top-ranking keyword table.
- Weekly rank and volume deltas.
- New article/forum/competitor link digest.
- Trend callouts (e.g., abandonment or relocation surges).
- Cost pain point summary from Reddit/social discussions.
