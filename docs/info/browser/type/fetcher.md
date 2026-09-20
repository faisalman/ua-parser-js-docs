[`← Browser Type`](../type.md)

# `fetcher`

Automated programs (bots) that retrieve specific URLs on-demand to extract metadata or generate previews.

::: tip
See the full list of detected values in the [`Fetchers`](/api/submodules/extensions/fetchers) extension.
:::

## User-Agent Examples

```sh
# Twitterbot
Twitterbot/1.0

# ChatGPT-User
Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot

# Discordbot
Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)

# Slackbot
Slackbot 1.0 (+https://api.slack.com/robots)

# FlipboardProxy
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:49.0) Gecko/20100101 Firefox/49.0 (FlipboardProxy/1.2; +http://flipboard.com/browserproxy)

# WhatsApp
WhatsApp/2.23.20.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Fetchers } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const parser = new UAParser(Fetchers);

console.log(parser.setUA('Twitterbot/1.0').getBrowser());
// {name: "Twitterbot", version: "1.0", major: "1", type: "fetcher"}

console.log(parser.browser.is(BrowserType.FETCHER));
// true
```
