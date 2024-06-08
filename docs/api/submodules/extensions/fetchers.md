# Fetchers

```sh
# List of known fetchers
BingPreview, ChatGPT-User, Discordbot, FeedFetcher-Google, 
Google-Read-Aloud, LinkedInBot, Mastodon, Pinterestbot, 
Redditbot, Slackbot, Slack-ImgProxy, Slack-LinkExpanding, 
Snapchat, Telegrambot, Twitterbot, WhatsApp, YaDirectFetcher, 
YandexCalendar, YandexDirect, YandexDirectDyn, YandexSearchShop, 
YandexSitelinks, YandexUserProxy
```

## Code Example

```js
import { Fetchers } from 'ua-parser-js/extensions';

const bingprev = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b';

const fetcherParser = new UAParser(Fetchers);

console.log(fetcherParser.setUA(bingprev).getBrowser());
// {name: "BingPreview", version: "1.0", major: "1.0b'", type: "fetcher"});
```