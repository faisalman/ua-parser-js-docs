[`← InApps`](../inapps.md)

# Evernote

## User-Agent Examples

```sh
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Evernote Windows/306387 (pt-PT, DDL); Windows/6.1.0 (Win32); Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Evernote Windows/306387 (pt-PT, DDL); Windows/6.1.0 (Win32); Safari/537.36').getBrowser());
// {name: "Evernote", type: "inapp"}
```

## References

- [Evernote🡥](https://evernote.com/)
