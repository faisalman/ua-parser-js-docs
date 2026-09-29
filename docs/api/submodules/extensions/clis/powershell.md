<sup>*[`Extensions Submodule`](../overview.md) > [`CLIs`](../clis.md) > `PowerShell`*</sup>

# PowerShell

- **Developer:** Microsoft
- **BrowserType:** [`cli`](/info/browser/type/cli)

PowerShell is Microsoft's command shell and scripting environment with built-in web request tools.

## User-Agent Examples

```sh
Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.15063; en-US) PowerShell/6.0.0
Mozilla/5.0 (Windows NT; Windows NT 10.0; de-DE) WindowsPowerShell/5.1.19041.5737
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { CLIs }      from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const cliParser = new UAParser(CLIs);
const ua = 'Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.15063; en-US) PowerShell/6.0.0';
const browser = cliParser.setUA(ua).getBrowser();

console.log(browser);
// {name: "PowerShell", version: "6.0.0", major: "6", type: "cli"}

// Compare using the built-in enum
const { CLI } = Extension.BrowserName;
console.log(browser.is(CLI.POWERSHELL));
// true
```

## References

- [PowerShell🡥](https://learn.microsoft.com/powershell/)
