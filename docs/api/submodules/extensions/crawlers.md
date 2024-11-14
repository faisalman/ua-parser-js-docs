# Crawlers

A program that automatically goes to websites, reads the content, and collects information like text or links. It is used by search engines (like Google) to find and store websites so they can show up in search results. The crawler follows links from one page to another and gathers data.

```sh
# List of known crawlers
360Spider, AhrefsBot, Amazonbot, Applebot, Archive.org, Baiduspider, Bytespider, 
Bingbot, CCBot, ClaudeBot, Coc Coc Bot, Dotbot, DuckDuckBot, Exabot, FacebookBot, 
Googlebot, GPTBot, MJ12Bot, MojeekBot, OAI-SearchBot, PerplexityBot, SemrushBot, 
Slurp, Sogou Spider, YandexBot, Yeti, YisouSpider
```

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