[`← InApps`](../inapps.md)

# Figma

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4_0) AppleWebKit/537.36 (KHTML, like Gecko) Figma/99.0.0 Chrome/89.0.4389.128 Electron/12.0.9 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4_0) AppleWebKit/537.36 (KHTML, like Gecko) Figma/99.0.0 Chrome/89.0.4389.128 Electron/12.0.9 Safari/537.36').getBrowser());
// {name: "Figma", version: "99.0.0", type: "inapp"}
```

## References

- [Figma🡥](https://www.figma.com/)
