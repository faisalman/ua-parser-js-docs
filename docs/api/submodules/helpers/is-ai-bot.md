# `isAIBot(res: IResult | string): boolean`

Check whether user-agent is an AI bot

```csv
# Current list of AI bots:
ai2bot, amazonbot, anthropic-ai, claude-web, claudebot,
applebot, applebot-extended, bytespider, ccbot, dataforseobot,
diffbot, googleother, googleother-image, googleother-video, 
google-extended, imagesiftbot, petalbot, facebookbot, 
meta-externalagent, gptbot, oai-searchbot, perplexitybot,
timpibot, velenpublicwebcrawler, omgili, omgilibot, 
semrushbot-ocob, webzio-extended, youbot, scrapy
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Bots } from 'ua-parser-js/extensions';
import { isAIBot } from 'ua-parser-js/helpers';

const ahref = 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)';
const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';
const searchGPT = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot';

const botParser = new UAParser({ Bots });

console.log(isAIBot(botParser.setUA(ahref).getResult())); // false
console.log(isAIBot(botParser.setUA(firefox).getResult())); // false
console.log(isAIBot(botParser.setUA(searchGPT).getResult())); // true
```

Alternatively, with only user-agent data:

```js
import { isAIBot } from 'ua-parser-js/helpers';

console.log(isAIBot(req.headers['user-agent']));
```