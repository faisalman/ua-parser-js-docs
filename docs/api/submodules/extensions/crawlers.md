# Crawlers

Bots that automatically visit websites and collect data.

- `360Spider` 
- `AhrefsBot` 
- `AI2Bot`
- `aiHitBot`
- `Amazonbot`
- `anthropic-ai` 
- `Applebot`
- `Applebot-Extended` 
- `Archive.org` 
- `Baiduspider` 
- `Bytespider` 
- `Bingbot` 
- `CCBot` 
- `ClaudeBot` 
- `Coc Coc Bot`
- `Diffbot` 
- `Dotbot` 
- `DuckDuckBot` 
- `Exabot` 
- `FacebookBot` 
- `Googlebot` 
- `GPTBot`
- `ImagesiftBot`
- `magpie-crawler`
- `Omgilibot` 
- `MJ12Bot` 
- `MojeekBot` 
- `OAI-SearchBot` 
- `PerplexityBot`
- `Screaming Frog SEO Spider` 
- `SemrushBot` 
- `Seznambot`
- `Slurp` 
- `Sogou Spider`
- `Teoma`
- `Timpibot`
- `VelenPublicWebCrawler`
- `Webzio-Extended` 
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