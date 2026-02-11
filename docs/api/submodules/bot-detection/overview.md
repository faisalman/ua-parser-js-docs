# Bot-Detection Submodule

Import from `'ua-parser-js/bot-detection'`

## List of Built-in Methods:

- [`isAIAssistant(ua: string): boolean`](/api/submodules/bot-detection/is-ai-assistant)

Check whether user-agent is an AI assistant

- [`isAICrawler(ua: string): boolean`](/api/submodules/bot-detection/is-ai-crawler)

Check whether user-agent is an AI crawler

- [`isBot(ua: string): boolean`](/api/submodules/bot-detection/is-bot)

Check whether user-agent is a bot

## Code Example

```js
import { isAIAssistant, isAICrawler, isBot } from 'ua-parser-js/bot-detection';

const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';
const ahrefsBot = 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)';
const searchGPT = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot';
const userGPT = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot';

console.log(isBot(firefox)); // false

console.log(isBot(ahrefsBot)); // true
console.log(isAICrawler(ahrefsBot)); // false

console.log(isBot(searchGPT)); // true
console.log(isAICrawler(searchGPT)); // true
console.log(isAIAssistant(searchGPT)); // false

console.log(isBot(userGPT)); // true
console.log(isAICrawler(userGPT)); // false
console.log(isAIAssistant(userGPT)); // true
```