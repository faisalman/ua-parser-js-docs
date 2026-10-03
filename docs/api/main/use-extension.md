<sup>*[`UAParser`](./overview.md) > `useExtension()`*</sup>

# `useExtension(extensions: UAParserExt): UAParser`

Insert custom regexes to extend detection rules.

::: info
- [Extending UAParser.js Regular Expression](/intro/extending-regex)
:::

## Code Examples

```js [using-single-extension.js]
import { UAParser } from 'ua-parser-js';
import { CLIs } from 'ua-parser-js/extensions';

const uap = new UAParser();
uap.setUA('Mozilla/5.0 (Windows NT; Windows NT 10.0; de-DE) WindowsPowerShell/5.1.19041.5737');

// before useExtension()
console.log(uap.getBrowser().name); // undefined           

// after useExtension()
uap.useExtension(CLIs);
console.log(uap.getBrowser().name); // PowerShell
```

```js [using-multiple-extensions.js]
import { UAParser } from 'ua-parser-js';
import { CLIs, Emails } from 'ua-parser-js/extensions';

const uap = new UAParser();

// Pass multiple extensions as an array:
uap.useExtension([CLIs, Emails]);

console.log(uap.setUA('curl/7.38.0').getBrowser());
// {name: "curl", version: "7.38.0", major: "7", type: "cli"}

const thunderbird = 'Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Thunderbird/78.13.0';

console.log(uap.setUA(thunderbird).getBrowser());
// {name: "Thunderbird", version: "78.13.0", major: "78", type: "email"}
```