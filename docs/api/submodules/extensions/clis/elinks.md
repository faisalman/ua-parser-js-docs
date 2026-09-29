<sup>*[`Extensions Submodule`](../overview.md) > [`CLIs`](../clis.md) > `ELinks`*</sup>

# ELinks

- **Developer:** The ELinks Project
- **BrowserType:** [`cli`](/info/browser/type/cli)

ELinks is a feature-rich text-mode web browser for terminals.

## User-Agent Examples

```sh
ELinks/0.11.4-3-lite (textmode; Debian; Linux 2.6.26-1-686 i686;
ELinks (0.11.3; Linux 2.6.23-hardened-r4 i686; 166x55)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { CLIs }      from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const cliParser = new UAParser(CLIs);
const ua = 'ELinks (0.11.3; Linux 2.6.23-hardened-r4 i686; 166x55)';
const browser = cliParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "ELinks", version: "0.11.3", major: "0", type: "cli"}

// Compare using the built-in enum
const { CLI } = Extension.BrowserName;
console.log(browser.is(CLI.ELINKS));
// true
```

## References

- [The history and evolution of the Links browsers🡥](http://elinks.cz/history.html)
