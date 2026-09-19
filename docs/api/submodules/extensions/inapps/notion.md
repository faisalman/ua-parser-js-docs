[`← InApps`](../inapps.md)

# Notion

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Notion/2.0.23 Chrome/91.0.4472.164 Electron/13.6.9 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Notion/2.0.23 Chrome/91.0.4472.164 Electron/13.6.9 Safari/537.36').getBrowser());
// {name: "Notion", version: "2.0.23", type: "inapp"}
```

## References

- [Notion🡥](https://www.notion.so/)
