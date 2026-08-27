[`← extensions`](/api/submodules/extensions/overview)

# `CLIs`

Extends [`browser`](/api/main/get-browser) detection to include tools that allow browsing websites directly from the terminal for simple browsing, automation, or use in low-resource environments:

## List of Detected CLIs

- [`cURL`](./clis/curl.md)
- [`ELinks`](./clis/elinks.md)
- [`HTTPie`](./clis/httpie.md)
- [`Lynx`](./clis/lynx.md)
- [`PowerShell`](./clis/powershell.md)
- [`Wget`](./clis/wget.md)
- ... etc.

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const httpie = 'HTTPie/0.9.9';
const lynx = 'Lynx/2.6';
const wget = 'Wget/1.21.1';

const cliParser = new UAParser(CLIs);

console.log(cliParser.setUA(httpie).getBrowser());
// {name: "HTTPie", version: "0.9.9", major: "0", type: "cli"}

console.log(cliParser.setUA(lynx).getBrowser());
// {name: "Lynx", version: "2.6", major: "2", type: "cli"}

console.log(cliParser.setUA(wget).getBrowser());
// {name: "Wget", version: "1.21.1", major: "1", type: "cli"}
```