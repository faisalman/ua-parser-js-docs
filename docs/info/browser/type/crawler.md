[`← Browser Type`](../type.md)

# `crawler`

Automated programs (bots) that systematically browse the web to index websites for search engines.

::: tip
See the full list of detected values in the [`Crawlers`](/api/submodules/extensions/crawlers) extension.
:::

## User-Agent Examples

```sh
# Googlebot
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)

# Bingbot
Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/

# AhrefsBot
Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)

# Applebot
Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B410 Safari/600.1.4 (Applebot/0.1;+http://www.apple.com/go/applebot)

# DuckDuckBot
DuckDuckBot/1.1; ( http://duckduckgo.com/duckduckbot.html)

# GPTBot
Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.0; +https://openai.com/gptbot)

# YandexBot
Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Crawlers } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const parser = new UAParser(Crawlers);

console.log(parser.setUA('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)').getBrowser());
// {name: "Googlebot", version: "2.1", major: "2", type: "crawler"}

console.log(parser.browser.is(BrowserType.CRAWLER));
// true
```
