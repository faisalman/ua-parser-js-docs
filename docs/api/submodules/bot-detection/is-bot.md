# [bot-detection](/api/submodules/bot-detection/overview) : isBot()

### `isBot(ua: string | IResult): boolean`

Check whether user-agent is a bot (an automated program that performs task without human interaction).

## Code Examples

:::code-group

```js [example.js]
import { isBot } from 'ua-parser-js/bot-detection';

const ahref = 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)';
const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';

console.log(isBot(ahref)); // true
console.log(isBot(firefox)); // false
```

```js [example-server.js]
import { isBot } from 'ua-parser-js/bot-detection';

console.log(isBot(req.headers['user-agent']));
```
:::