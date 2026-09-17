[`← Browser Name`](../name.md)

# Jasmine

- **Developer:** Samsung Electronics (Samsung Group)
- **Platforms:** Samsung SHP
- **Type:** Browser

## Related Browsers

These browsers were developed for Samsung devices and platforms:

| Browser | Description |
| --- | --- |
| [`Jasmine`](./jasmine.md) | Samsung's browser for older mobile devices. |
| [`Samsung Internet`](./samsung-internet.md) | Samsung's current mobile browser. |
| [`Tizen Browser`](./tizen.md) | The browser included with Tizen devices. |

## User-Agent Examples

```sh
SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Jasmine", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.JASMINE));
// true
```
