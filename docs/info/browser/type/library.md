[`← Browser Type`](../type.md)

# `library`

Software components or libraries used within larger applications to fetch or interact with web content.

::: tip
See the full list of detected values in the [`Libraries`](/api/submodules/extensions/libraries) extension.
:::

## User-Agent Examples

```sh
# axios
axios/1.7.2

# python-requests
python-requests/2.32

# Scrapy
Scrapy/1.5.0 (+https://scrapy.org)

# Node.js
Node.js/22

# okhttp
okhttp/3.2.0

# Apache-HttpClient
Apache-HttpClient/4.5.14 (Java/17.0.12)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const parser = new UAParser(Libraries);

console.log(parser.setUA('axios/1.7.2').getBrowser());
// {name: "axios", version: "1.7.2", major: "1", type: "library"}

console.log(parser.browser.is(BrowserType.LIBRARY));
// true
```
