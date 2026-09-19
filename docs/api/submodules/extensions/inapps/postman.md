[`← InApps`](../inapps.md)

# Postman

## User-Agent Examples

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Postman/9.29.0 Chrome/94.0.4606.81 Electron/15.5.7 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Postman/9.29.0 Chrome/94.0.4606.81 Electron/15.5.7 Safari/537.36').getBrowser());
// {name: "Postman", version: "9.29.0", type: "inapp"}
```

## References

- [Postman🡥](https://www.postman.com/)
