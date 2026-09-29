<sup>*[`Extensions Submodule`](../overview.md) > [`CLIs`](../clis.md) > `cURL`*</sup>

# cURL

- **Developer:** Daniel Stenberg
- **BrowserType:** [`cli`](/info/browser/type/cli)

cURL is a command-line tool for transferring data using URLs.

## User-Agent Examples

```sh
curl/7.38.0
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { CLIs }      from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const cliParser = new UAParser(CLIs);
const browser = cliParser.setUA('curl/7.38.0').getBrowser();

console.log(browser);
// {name: "curl", version: "7.38.0", major: "7", type: "cli"}

// Compare using the built-in enum
const { CLI } = Extension.BrowserName;
console.log(browser.is(CLI.CURL));
// true
```

## References

- [cURL🡥](https://curl.se/)
