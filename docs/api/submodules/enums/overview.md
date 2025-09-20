# Enums Submodule

Import these enums from `'ua-parser-js/enums'`

- [`BrowserName`](browser-name.md)
- [`BrowserType`](browser-type.md)
- [`CPUArch`](cpu-arch.md)
- [`DeviceType`](device-type.md)
- [`DeviceVendor`](device-vendor.md)
- [`EngineName`](engine-name.md)
- [`OSName`](os-name.md)
- [`Extension`](extension.md)

## Code Example

- Match for a specific `os.name`:

```js [detect-rim.js]
import { UAParser } from 'ua-parser-js';
import { OSName } from 'ua-parser-js/enums';

const { os } = UAParser();
if (os.is(OSName.RIM_TABLET_OS)) {
    console.log('Are you for real?');
}
```

- Match for a specific `browser.type`:

```js [detect-crawler.js]
import { UAParser } from 'ua-parser-js';
import { Crawlers } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const uaParser = new UAParser(Crawlers);
const typeofBrowser = uaParser
                        .setUA(req.headers['user-agent'])
                        .getBrowser()
                        .type;
if (typeofBrowser == BrowserType.CRAWLER) {
    console.log('Hi, hello there Spidey!');
}
```