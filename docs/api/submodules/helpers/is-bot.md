# `isBot(res: IResult): boolean`

Check whether current browser is a bot

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Bots } from 'ua-parser-js/extensions';
import { isBot } from 'ua-parser-js/helpers';

const ahref = 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)';
const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';

const botParser = new UAParser({ Bots });

console.log(isBot(botParser.setUA(ahref).getResult())); // true
console.log(isBot(botParser.setUA(firefox).getResult())); // false
```