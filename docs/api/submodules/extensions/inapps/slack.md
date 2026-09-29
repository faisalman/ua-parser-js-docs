<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `Slack`*</sup>

# Slack

- **Developer:** Salesforce
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.90 Chrome/127.0.6533.72 Electron/13.1.9 Safari/537.36
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const appParser = new UAParser(InApps);
const browser = appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Slack/4.39.90 Chrome/127.0.6533.72 Electron/13.1.9 Safari/537.36').getBrowser();

console.log(browser);
// {name: "Slack", version: "4.39.90", type: "inapp"}

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser.is(InApp.SLACK));
// true
```

## References

- [Slack🡥](https://slack.com/)
