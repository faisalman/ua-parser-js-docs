# [helpers](/api/submodules/helpers/overview) : isChromeFamily()

### `isChromeFamily(res: IResult | string): boolean`

Check whether browser is a Chrome-based browser (using Blink engine)

## Code Example

```js [example.js]
import { isChromeFamily } from 'ua-parser-js/helpers';

const edge = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.2151.58';
const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';

let result1 = UAParser(edge);
console.log(isChromeFamily(result1));
// true

let result2 = UAParser(firefox);
console.log(isChromeFamily(result2)); 
// false
```

Alternatively, with only user-agent data:

```js [example-server.js]
import { isChromeFamily } from 'ua-parser-js/helpers';

console.log(isChromeFamily(req.headers['user-agent']));
```