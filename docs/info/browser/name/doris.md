[`← Browser Name`](../name.md)

# Doris

- **Platforms:** Symbian
- **Type:** Browser

## User-Agent Examples

##### Symbian

```sh
Doris/1.15 [en] (Symbian)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Doris/1.15 [en] (Symbian)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Doris", version: "1.15", major: "1"}

console.log(browser.is(BrowserName.DORIS));
// true
```
