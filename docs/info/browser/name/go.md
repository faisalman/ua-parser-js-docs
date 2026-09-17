[`← Browser Name`](../name.md)

# Go Browser

- **Developer:** Nokia
- **Platforms:** Symbian
- **Type:** Browser

## Related Browsers

These browsers were developed for Nokia devices and platforms:

| Browser | Description |
| --- | --- |
| [`Go Browser`](./go.md) | A browser found on older Nokia phones. |
| [`Maemo Browser`](./maemo.md) | The browser for Nokia's Maemo platform. |
| [`Nokia Browser`](./nokia.md) | The browser bundled with Nokia phones. |
| [`Ovi Browser`](./ovi.md) | Nokia's data-saving browser for Series 40 phones. |

## User-Agent Examples

```sh
NokiaE66/GoBrowser/2.0.297
Nokia5700XpressMusic/GoBrowser/1.6.91
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'NokiaE66/GoBrowser/2.0.297';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "GoBrowser", version: "2.0.297", major: "2"}

console.log(browser.is(BrowserName.GO));
// true
```
