<sup>*[`Extensions Submodule`](../overview.md) > [`CLIs`](../clis.md) > `HTTPie`*</sup>

# HTTPie

- **Developer:** HTTPie, Inc.
- **BrowserType:** [`cli`](/info/browser/type/cli)

HTTPie is a command-line HTTP client designed for human-friendly interaction.

## User-Agent Examples

```sh
HTTPie/0.9.9
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { CLIs }      from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const cliParser = new UAParser(CLIs);
const browser = cliParser.setUA('HTTPie/0.9.9').getBrowser();

console.log(browser);
// {name: "HTTPie", version: "0.9.9", major: "0", type: "cli"}

// Compare using the built-in enum
const { CLI } = Extension.BrowserName;
console.log(browser.is(CLI.HTTPIE));
// true
```

## References

- [HTTPie🡥](https://httpie.io/)
