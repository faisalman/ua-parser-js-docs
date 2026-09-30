<sup>*[`Extensions Submodule`](./overview.md) > `Crawlers`*</sup>

# `Crawlers`

Extends [`browser`](/info/browser/name) detection to include bots that <u>**automatically**</u> visit websites and <u>**collect data**</u>.

::: tip
Bots that retrieve content from <u>**specific**</u> URLs <u>**on demand**</u> are categorized as [Fetchers](/api/submodules/extensions/fetchers) instead.
:::

| **Operator** | **User-Agent** |
| --- | --- |
| 360 | `360Spider` |
| Ahrefs | `AhrefsBot` |
| AI2 | `AI2Bot` |
| aiHit | `aiHitBot` |
| Algolia | `Algolia Crawler`, `Algolia Crawler Renderscript` |
| Amazon | `Amazonbot`, `contxbot` |
| Anthropic | `anthropic-ai`, `Claude-SearchBot`, `Claude-Web`, `ClaudeBot` |
| Apple | `Applebot`, `Applebot-Extended` |
| Ask | `Teoma` |
| Atlassian | `atlassian-bot` |
| Audisto | `Audisto Crawler` |
| Awario | `AwarioBot`, `AwarioRssBot`, `AwarioSmartBot` |
| Baidu | `Baiduspider`, `Baiduspider-ads`, `Baiduspider-cpro`, `Baiduspider-favo`, `Baiduspider-image`, `Baiduspider-news`, `Baiduspider-render`, `Baiduspider-video` |
| Brave | `Bravebot` |
| BrightEdge | `BrightEdge Crawler` |
| ByteDance | `Bytespider` |
| Cloudflare | `Cloudflare-AutoRAG` |
| Coc Coc | `coccocbot-web`, `coccocbot-image` |
| Cohere | `cohere-training-data-crawler` |
| Common Crawl | `CCBot` |
| Comscore | `proximic` |
| Cotoyogi | `Cotoyogi` |
| Coveo | `Coveobot` |
| Criteo | `CriteoBot` |
| DataForSEO | `DataForSeoBot` |
| Daum | `Daum`, `Daumoa`, `Daumoa-image` |
| DeepSeek | `DeepSeekBot` |
| Diffbot | `Diffbot` |
| DuckDuckGo | `DuckDuckBot`, `DuckDuckGo-Favicons-Bot` |
| Elastic | `Elastic` |
| Exalead | `Exabot` |
| Google | `Google-InspectionTool`, `Google-NotebookLM`, `Google-Safety`, `Googlebot`, `Googlebot-Image`, `Googlebot-News`, `Googlebot-Video`, `GoogleOther`, `GoogleOther-Image`, `GoogleOther-Video`, `Storebot-Google` |
| Hive AI | `ImagesiftBot` |
| Huawei | `PanguBot`, `PetalBot` |
| HubSpot | `HubSpot Crawler` |
| Hugging Face | `HuggingFace-Bot` |
| Hunter.io | `VelenPublicWebCrawler` |
| iAsk | `iAskBot` |
| Internet Archive | `archive.org_bot`, `ia_archiver` |
| Kagi | `Kagibot` |
| Kangaroo | `Kangaroo Bot` |
| LINE | `Linespider` |
| LinkedIn | `LinkedInBot` |
| Magpie | `magpie-crawler` |
| Majestic | `MJ12Bot` |
| Mendable.ai | `FirecrawlAgent` |
| Meta | `FacebookBot`, `facebookexternalhit`, `facebookcatalog`, `meta-externalagent`, `Meta-ExternalAds`, `Meta-WebIndexer` |
| Microsoft | `adidxbot`, `bingbot` |
| Mojeek | `MojeekBot` |
| Moz | `Dotbot` |
| OneSpot | `Onespot-ScraperBot` |
| OpenAI | `GPTBot`, `OAI-SearchBot` |
| Perplexity | `PerplexityBot` |
| Qwant | `Qwantbot` |
| Replicate | `Replicate-Bot` |
| RunPod | `RunPod-Bot` |
| Screaming Frog | `Screaming Frog SEO Spider` |
| Semrush | `SemrushBot`, `SemrushBot-BA`, `SemrushBot-SI`, `SemrushBot-OCOB`, `SemrushBot-SWA` |
| Seznam | `Seznambot` |
| Sogou | `Sogou web spider` |
| Startpage | `StartpagePrivateImageProxy` |
| Timpi | `Timpibot` |
| Together AI | `Together-Bot` |
| Turnitin | `TurnitinBot` |
| Vercel | `v0bot` |
| Webz.io | `Omgilibot`, `omgili`, `omgilibot`, `Webzio-Extended` |
| xAI | `xAI-Bot` |
| YaCy | `yacybot` |
| Yahoo | `Slurp`, `Y!J-BRW`, `Yahoo! Slurp` |
| Yandex | `YandexBot` |
| Yeti | `Yeti` |
| Yisou | `YisouSpider` |
| You.com | `YouBot` |
| Zhipu AI | `ChatGLM-Spider` |

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