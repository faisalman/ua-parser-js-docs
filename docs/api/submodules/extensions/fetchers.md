# [extensions](/api/submodules/extensions/overview) : Fetchers

Extends [`browser`](/api/main/get-browser) detection to include bots that retrieve content from <u>**specific**</u> URLs <u>**on demand**</u>

::: tip
Bots that <u>**automatically**</u> visit websites and <u>**collect data**</u> are categorized as [Crawlers](/api/submodules/extensions/crawlers) instead.
:::

- `AhrefsSiteAudit` 
- `Asana`
- `BingPreview` 
- `bitlybot`
- `Better Uptime Bot`
- `Blueno`
- `Bluesky`
- `BufferLinkPreviewBot`
- `ChatGPT-User` 
- `Chrome-Lighthouse`
- `cohere-ai`
- `Discordbot` 
- `DuckAssistBot`
- `FeedFetcher-Google` 
- `Gemini-Deep-Research`
- `Google-PageRenderer`
- `Google-Read-Aloud`
- `Google-Site-Verification`  
- `GoogleImageProxy` 
- `GoogleProducer` 
- `HubSpot Page Fetcher`
- `Iframely`
- `kakaotalk-scrap`
- `LinkedInBot` 
- `Mastodon` 
- `meta-externalfetcher` 
- `MistralAI-User`
- `MicrosoftPreview`
- `Perplexity-User`
- `Pinterestbot` 
- `Redditbot` 
- `rogerbot` 
- `SiteAuditBot` 
- `Slackbot` 
- `Slack-ImgProxy` 
- `Slack-LinkExpanding` 
- `SkypeUriPreview` 
- `Snap URL Preview` 
- `Snapchat` 
- `Telegrambot` 
- `TikTokSpider`
- `Twitterbot` 
- `Uptimerobot` 
- `Vercelbot` 
- `vercel-favicon-bot`
- `vercel-screenshot-bot`
- `vercelflags`
- `verceltracing`
- `WhatsApp` 
- `YaDirectFetcher` 
- `YandexCalendar` 
- `YandexDirect` 
- `YandexDirectDyn` 
- `YandexSearchShop` 
- `YandexSitelinks` 
- `YandexUserProxy`
- `Zoombot`
- ... etc.

## Code Example

```js
import { Fetchers } from 'ua-parser-js/extensions';

const bingprev = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (
- `KHTML` like Gecko) BingPreview/1.0b';

const fetcherParser = new UAParser(Fetchers);

console.log(fetcherParser.setUA(bingprev).getBrowser());
// {name: "BingPreview", version: "1.0", major: "1.0b'", type: "fetcher"});
```