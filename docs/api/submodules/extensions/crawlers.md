# Crawlers

```sh
# List of known crawlers
Amazonbot, Applebot, Baiduspider, Bytespider, Bingbot, ClaudeBot, 
DuckDuckBot, FacebookBot, GPTBot, Slurp, Sogou Spider, YandexBot
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