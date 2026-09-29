<sup>*[`Extensions Submodule`](../overview.md) > [`CLIs`](../clis.md) > `Lynx`*</sup>

# Lynx

- **Developer:** Thomas Dickey and contributors
- **BrowserType:** [`cli`](/info/browser/type/cli)

Lynx is a text-based web browser designed for terminal use.

## User-Agent Examples

```sh
Lynx 2.8.8dev.3
Lynx/2.6
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { CLIs }      from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const cliParser = new UAParser(CLIs);
const browser = cliParser.setUA('Lynx/2.6').getBrowser();

console.log(browser);
// {name: "Lynx", version: "2.6", major: "2", type: "cli"}

// Compare using the built-in enum
const { CLI } = Extension.BrowserName;
console.log(browser.is(CLI.LYNX));
// true
```

## References

- [Lynx🡥](https://lynx.invisible-island.net/)
