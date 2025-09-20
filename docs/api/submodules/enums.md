# Enums Submodule

Import these enums from `'ua-parser-js/enums'`

- [`BrowserName`](enums/browser-name.md)
- [`BrowserType`](enums/browser-type.md)
- [`CPUArch`](enums/cpu-arch.md)
- [`DeviceType`](enums/device-type.md)
- [`DeviceVendor`](enums/device-vendor.md)
- [`EngineName`](enums/engine-name.md)
- [`OSName`](enums/os-name.md)

## Code Example

- Match for a specific `os.name`:

```js
import { UAParser } from 'ua-parser-js';
import { OSName } from 'ua-parser-js/enums';

const { os } = UAParser();
if (os.is(OSName.RIM_TABLET_OS)) {
    console.log('Are you for real?');
}
```

- Match for a specific `browser.type`:

```js
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