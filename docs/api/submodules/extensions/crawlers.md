# Crawlers

Bots that automatically visit websites and collect data.

- `360Spider` 
- `adidxbot`
- `AhrefsBot` 
- `AI2Bot`
- `aiHitBot`
- `Amazonbot`
- `Applebot`
- `Applebot-Extended` 
- `anthropic-ai` 
- `archive.org_bot` 
- `Baiduspider` 
- `Baiduspider-ads` 
- `Baiduspider-cpro` 
- `Baiduspider-favo` 
- `Baiduspider-image` 
- `Baiduspider-news` 
- `Baiduspider-render` 
- `Baiduspider-video` 
- `bingbot` 
- `Bytespider` 
- `CCBot` 
- `Claude-Web`
- `ClaudeBot` 
- `coccocbot-web`
- `coccocbot-image`
- `DataForSeoBot` 
- `Diffbot` 
- `Dotbot` 
- `DuckDuckBot` 
- `Exabot` 
- `FacebookBot` 
- `facebookexternalhit` 
- `facebookcatalog` 
- `Google-InspectionTool` 
- `Google-Safety` 
- `Googlebot` 
- `Googlebot-Image` 
- `Googlebot-News` 
- `Googlebot-Video` 
- `GoogleOther` 
- `GoogleOther-Image` 
- `GoogleOther-Video` 
- `GPTBot`
- `ia_archiver` 
- `ImagesiftBot`
- `Linespider` 
- `LinkedInBot` 
- `magpie-crawler`
- `meta-externalagent` 
- `Omgilibot` 
- `MJ12Bot` 
- `MojeekBot` 
- `OAI-SearchBot` 
- `omgili` 
- `omgilibot` 
- `PerplexityBot`
- `PetalBot` 
- `Screaming Frog SEO Spider` 
- `SemrushBot` 
- `SemrushBot-BA`
- `SemrushBot-SI`
- `SemrushBot-OCOB`
- `Seznambot`
- `Slurp` 
- `Sogou web spider`
- `Storebot-Google` 
- `Teoma`
- `Timpibot`
- `TurnitinBot`
- `VelenPublicWebCrawler`
- `Webzio-Extended` 
- `Y!J-BRW`
- `Yahoo! Slurp`
- `YandexBot` 
- `Yeti` 
- `YisouSpider`
- `YouBot`
- ... etc.

## Code Example

```js
import { Crawlers } from 'ua-parser-js/extensions';

const googleBot = 'Googlebot-Video/1.0';
const facebookBot = 'Mozilla/5.0 (compatible; FacebookBot/1.0; +https://developers.facebook.com/docs/sharing/webmasters/facebookbot/)';

const botParser = new UAParser(Crawlers);

console.log(botParser.setUA(googleBot).getBrowser());
// {name: "Googlebot-Video", version: "1.0", major: "1", type: "crawler"});

console.log(botParser.setUA(facebookBot).getBrowser());
// {name: "FacebookBot", version: "1.0", major: "1", type:"crawler"});
```