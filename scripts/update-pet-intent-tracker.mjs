import { readFile, writeFile } from 'node:fs/promises';

const inputPath = new URL('../monitoring/data/weekly-input.json', import.meta.url);
const outputPath = new URL('../monitoring/reports/latest-weekly-report.md', import.meta.url);

const fmtDelta = (n) => (n > 0 ? `+${n}` : `${n}`);
const trendIcon = (delta) => (delta > 0 ? '📈' : delta < 0 ? '📉' : '➖');

const build = (data) => {
  const sortedKeywords = [...data.keywords].sort((a, b) => a.rank - b.rank);

  const keywordRows = sortedKeywords
    .map((k) => {
      const rankDelta = k.prevRank - k.rank;
      const volDelta = k.searchVolume - k.prevSearchVolume;
      return `| ${k.term} | ${k.rank} | ${fmtDelta(rankDelta)} | ${k.searchVolume} | ${fmtDelta(volDelta)} ${trendIcon(volDelta)} |`;
    })
    .join('\n');

  const topPainPoints = [...data.socialPainPoints]
    .sort((a, b) => b.mentions - a.mentions)
    .map((p) => `- ${p.painPoint} (${p.mentions} mentions)`)
    .join('\n');

  const list = (items, mapper) => (items.length ? items.map(mapper).join('\n') : '- None logged this week.');

  return `# Weekly UAE Pet Intent Report\n\n**Coverage:** ${data.weekStart} to ${data.weekEnd}\n\n## 1) Top-ranking keywords (Dubai/UAE pet relocation intent)\n\n| Keyword | Current Rank | Rank Shift vs Last Week | Search Volume | Volume Shift |\n|---|---:|---:|---:|---:|\n${keywordRows}\n\n## 2) New content monitored\n\n### Articles\n${list(data.newContent.articles, (a) => `- [${a.title}](${a.url})`)}\n\n### Forum threads\n${list(data.newContent.forums, (f) => `- [${f.title}](${f.url})`)}\n\n### Competitor blog posts (UAE pet services)\n${list(data.newContent.competitorPosts, (c) => `- **${c.source}:** [${c.title}](${c.url})`)}\n\n## 3) Regional trend watch\n${list(data.regionalSignals, (s) => `- ${s}`)}\n\n## 4) Reddit/social user pain points (pet move costs)\n${topPainPoints}\n\n## 5) Analyst notes\n- Watch for sharp rises in "urgent pet relocation", "pet fostering", and "pet surrender" terms as potential stress indicators linked to regional tensions.\n- If any keyword volume shift exceeds 25% week-over-week, trigger a deeper review of demand drivers and campaign messaging.\n`;
};

const raw = await readFile(inputPath, 'utf8');
const data = JSON.parse(raw);
const report = build(data);
await writeFile(outputPath, report, 'utf8');
console.log(`Report generated: ${outputPath.pathname}`);
