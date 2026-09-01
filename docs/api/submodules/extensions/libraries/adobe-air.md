[`← Libraries`](../libraries.md)

# Adobe AIR

Adobe AIR is a cross-platform runtime for building desktop and mobile applications.

## User-Agent Examples

```sh
Mozilla/5.0 (Windows; U; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) AdobeAIR/3.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);
const ua = 'Mozilla/5.0 (Windows; U; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) AdobeAIR/3.1';

console.log(libParser.setUA(ua).getBrowser());
// {name: "AdobeAIR", version: "3.1", major: "3", type: "library"}
```

## References

- [Adobe AIR🡥](https://airsdk.harman.com/)
