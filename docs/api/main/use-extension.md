# [UAParser](/api/main/overview#methods) : useExtension()

### `useExtension(extensions: UAParserExt): UAParser`

Insert custom regexes to extend detection rules.

::: info
- [Extending UAParser.js Regular Expression](/intro/extending-regex)
:::

## Code Example

```js
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