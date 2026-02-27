# Bot-Detection Submodule

Import from `'ua-parser-js/bot-detection'`

## List of Built-in Methods:

- [`isAIAssistant(ua: string | IResult): boolean`](/api/submodules/bot-detection/is-ai-assistant)

Check whether user-agent is an AI assistant (an AI bot that browses or acts *for a user*).

- [`isAICrawler(ua: string | IResult): boolean`](/api/submodules/bot-detection/is-ai-crawler)

Check whether user-agent is an AI crawler (an AI bot that browses websites *by itself* to collect data).

- [`isBot(ua: string | IResult): boolean`](/api/submodules/bot-detection/is-bot)

Check whether user-agent is a bot (an automated program that performs task without human interaction).

## Code Examples

```js:line-numbers
import { UAParser } from 'ua-parser-js';
import { Bots } from 'ua-parser-js/extensions';
import { isAIAssistant, isAICrawler, isBot } from 'ua-parser-js/bot-detection';

const result = UAParser(Bots, req.headers);

if (isBot(result)) {
    if (isAICrawler(result)) {
        console.log('You are an AI Crawler Bot!');
    } else if (isAIAssistant(result)) {
        console.log('You are an AI Assistant Bot!');
    } else {
        console.log('You are a Bot!');
    }
} else {
    console.log('You might be a human or an unknown Bot!');
}
```

```js:line-numbers
import { isAIAssistant, isAICrawler, isBot } from 'ua-parser-js/bot-detection';

const ua_firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';
const ua_ahrefsBot = 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)';
const ua_searchGPT = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot';
const ua_userGPT = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot';

console.log(isBot(ua_firefox)); // false

console.log(isBot(ua_ahrefsBot)); // true
console.log(isAICrawler(ua_ahrefsBot)); // false

console.log(isBot(ua_searchGPT)); // true
console.log(isAICrawler(ua_searchGPT)); // true
console.log(isAIAssistant(ua_searchGPT)); // false

console.log(isBot(ua_userGPT)); // true
console.log(isAICrawler(ua_userGPT)); // false
console.log(isAIAssistant(ua_userGPT)); // true
```

```js:line-numbers
import { UAParser } from 'ua-parser-js';
import { Crawlers } from 'ua-parser-js/extensions';

const ua = "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.0; +https://openai.com/gptbot)";
const crawlerParser = new UAParser(Crawlers);
const browser = crawlerParser.setUA(ua).getBrowser();

console.log(browser);  
// { name: 'GPTBot', type: 'crawler', version: '1.0', major: '1' }
```