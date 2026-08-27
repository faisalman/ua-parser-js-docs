[`← CLIs`](../clis.md)

# PowerShell

PowerShell is Microsoft's command shell and scripting environment with built-in web request tools.

## User-Agent Examples

```sh
Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.15063; en-US) PowerShell/6.0.0
Mozilla/5.0 (Windows NT; Windows NT 10.0; de-DE) WindowsPowerShell/5.1.19041.5737
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const cliParser = new UAParser(CLIs);
const ua = 'Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.15063; en-US) PowerShell/6.0.0';

console.log(cliParser.setUA(ua).getBrowser());
// {name: "PowerShell", version: "6.0.0", major: "6", type: "cli"}
```

## References

- [PowerShell🡥](https://learn.microsoft.com/powershell/)
