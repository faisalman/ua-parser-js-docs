<sup>*[`Extensions Submodule`](../overview.md) > [`CLIs`](../clis.md) > `Wget`*</sup>

# Wget

- **Developer:** The GNU Project
- **BrowserType:** [`cli`](/info/browser/type/cli)

Wget is a command-line utility for downloading files over common internet protocols.

## User-Agent Examples

```sh
Wget/1.21.1
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { CLIs }      from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const cliParser = new UAParser(CLIs);
const browser = cliParser.setUA('Wget/1.21.1').getBrowser();

console.log(browser);
// {name: "Wget", version: "1.21.1", major: "1", type: "cli"}

// Compare using the built-in enum
const { CLI } = Extension.BrowserName;
console.log(browser.is(CLI.WGET));
// true
```

## References

- [Wget🡥](https://www.gnu.org/software/wget/)
