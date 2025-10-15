# [extensions](/api/submodules/extensions/overview) : Crawlers

Extends [`browser`](/api/main/get-browser) detection to include bots that <u>**automatically**</u> visit websites and <u>**collect data**</u>.

::: tip
Bots that retrieve content from <u>**specific**</u> URLs <u>**on demand**</u> are categorized as [Fetchers](/api/submodules/extensions/fetchers) instead.
:::

- `360Spider` 
- `adidxbot`
- `AhrefsBot` 
- `AI2Bot`
- `aiHitBot`
- `Algolia Crawler`
- `Algolia Crawler Renderscript`
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
- `Bravebot`
- `Bytespider` 
- `CCBot` 
- `ChatGLM-Spider`
- `Claude-Web`
- `ClaudeBot` 
- `coccocbot-web`
- `coccocbot-image`
- `cohere-training-data-crawler`
- `contxbot`
- `Cotoyogi`
- `Coveobot`
- `CriteoBot`
- `DataForSeoBot` 
- `Daum`
- `Daumoa`
- `Daumoa-image`
- `DeepSeekBot`
- `Diffbot` 
- `Dotbot` 
- `DuckDuckBot` 
- `DuckDuckGo-Favicons-Bot`
- `Elastic`
- `Exabot` 
- `FacebookBot` 
- `facebookexternalhit` 
- `facebookcatalog` 
- `FirecrawlAgent`
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
- `HuggingFace-Bot`
- `ia_archiver` 
- `iAskBot`
- `ImagesiftBot`
- `Kagibot`
- `Kangaroo Bot`
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
- `Onespot-ScraperBot`
- `PanguBot`
- `PerplexityBot`
- `PetalBot` 
- `Qwantbot`
- `Replicate-Bot`
- `RunPod-Bot`
- `Screaming Frog SEO Spider` 
- `SemrushBot` 
- `SemrushBot-BA`
- `SemrushBot-SI`
- `SemrushBot-OCOB`
- `Seznambot`
- `Slurp` 
- `Sogou web spider`
- `StartpagePrivateImageProxy`
- `Storebot-Google` 
- `Teoma`
- `Timpibot`
- `Together-Bot`
- `TurnitinBot`
- `v0bot`
- `VelenPublicWebCrawler`
- `Webzio-Extended` 
- `xAI-Bot`
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