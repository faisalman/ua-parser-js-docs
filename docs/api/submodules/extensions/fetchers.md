<sup>*[`Extensions Submodule`](./overview.md) > `Fetchers`*</sup>

# `Fetchers`

Extends [`browser`](/info/browser/name) detection to include bots that retrieve content from <u>**specific**</u> URLs <u>**on demand**</u>

::: tip
Bots that <u>**automatically**</u> visit websites and <u>**collect data**</u> are categorized as [Crawlers](/api/submodules/extensions/crawlers) instead.
:::

| **Operator** | **User-Agent** |
| --- | --- |
| Ahrefs | `AhrefsSiteAudit` |
| Amazon | `Nova Act` |
| Asana | `Asana` |
| Better Uptime | `Better Uptime Bot` |
| Bitly | `bitlybot` |
| Bluesky | `Bluesky` |
| Buffer | `BufferLinkPreviewBot` |
| ByteDance | `TikTokSpider` |
| Cohere | `cohere-ai` |
| Discord | `Discordbot` |
| DuckDuckGo | `DuckAssistBot` |
| Feedly | `Feedly` |
| Flipboard | `FlipboardProxy` |
| Google | `Chrome-Lighthouse`, `FeedFetcher-Google`, `Gemini-Deep-Research`, `Google-PageRenderer`, `Google-Read-Aloud`, `Google-Site-Verification`, `GoogleDocs`, `GoogleImageProxy`, `GoogleProducer` |
| HubSpot | `HubSpot Page Fetcher` |
| Iframely | `Iframely` |
| Kakao | `kakaotalk-scrap` |
| LinkedIn | `LinkedInBot` |
| Mastodon | `Mastodon` |
| Meta | `meta-externalfetcher`, `WhatsApp` |
| Microsoft | `BingPreview`, `MicrosoftPreview`, `SkypeUriPreview` |
| Mistral AI | `MistralAI-User` |
| NAVER | `Blueno` |
| Oncrawl | `rogerbot` |
| OpenAI | `ChatGPT-User` |
| Perplexity | `Perplexity-User` |
| Pinterest | `Pinterestbot` |
| Reddit | `Redditbot` |
| Semrush | `SiteAuditBot` |
| Slack | `Slackbot`, `Slack-ImgProxy`, `Slack-LinkExpanding` |
| Snap | `Snap URL Preview`, `Snapchat` |
| Telegram | `Telegrambot` |
| Uptime.com | `UptimeBot` |
| UptimeRobot | `Uptimerobot` |
| Vercel | `Vercelbot`, `vercel-favicon-bot`, `vercel-screenshot-bot`, `vercelflags`, `verceltracing` |
| VirusTotal | `virustotal` |
| X | `Twitterbot` |
| Yandex | `YaDirectFetcher`, `YandexCalendar`, `YandexDirect`, `YandexDirectDyn`, `YandexSearchShop`, `YandexSitelinks`, `YandexUserProxy` |
| ZoomInfo | `Zoombot` |

## Code Example

```js
import { Fetchers } from 'ua-parser-js/extensions';

const bingprev = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (
- `KHTML` like Gecko) BingPreview/1.0b';

const fetcherParser = new UAParser(Fetchers);

console.log(fetcherParser.setUA(bingprev).getBrowser());
// {name: "BingPreview", version: "1.0", major: "1.0b'", type: "fetcher"});
```