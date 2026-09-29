<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `Mattermost`*</sup>

# Mattermost

- **Developer:** Mattermost, Inc.
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
# Mattermost on Mac
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/4.4.0 Chrome/76.0.3809.146 Electron/6.1.7 Safari/537.36

# Mattermost on iPad
Mattermost/1.49.1 (iPad; iOS 15.3.1; Scale/2.00)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const appParser = new UAParser(InApps);
let browser = appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/4.4.0 Chrome/76.0.3809.146 Electron/6.1.7 Safari/537.36').getBrowser();

console.log(browser);
// {name: "Mattermost", version: "4.4.0", type: "inapp"}

browser = appParser.setUA('Mattermost/1.49.1 (iPad; iOS 15.3.1; Scale/2.00)').getBrowser();

console.log(browser);
// {name: "Mattermost", version: "1.49.1", type: "inapp"}

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser.is(InApp.MATTERMOST));
// true
```

## References

- [Mattermost🡥](https://mattermost.com/)
