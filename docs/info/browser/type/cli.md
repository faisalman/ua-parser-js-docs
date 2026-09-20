[`← Browser Type`](../type.md)

# `cli`

Text-based web browsers operated through the command line, used for browsing websites without a graphical interface.

::: tip
See the full list of detected values in the [`CLIs`](/api/submodules/extensions/clis) extension.
:::

## User-Agent Examples

```sh
# curl
curl/7.38.0

# Wget
Wget/1.21.1

# Lynx
Lynx/2.6

# HTTPie
HTTPie/0.9.9

# ELinks
ELinks/0.11.4-3-lite (textmode; Debian; Linux 2.6.26-1-686 i686;

# PowerShell
Mozilla/5.0 (Windows NT 10.0; Microsoft Windows 10.0.15063; en-US) PowerShell/6.0.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const parser = new UAParser(CLIs);

console.log(parser.setUA('curl/7.38.0').getBrowser());
// {name: "curl", version: "7.38.0", major: "7", type: "cli"}

console.log(parser.browser.is(BrowserType.CLI));
// true
```
