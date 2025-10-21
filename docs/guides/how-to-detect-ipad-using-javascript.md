# How to Detect iPad using JavaScript

iPads used to have a very clear user-agent string that included the keyword `iPad`, for example:

`Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4`

However, starting from iPadOS 13, Apple forces Safari to use desktop mode by default. This makes Safari on iPad started identifying itself as a desktop device (`Macintosh`) instead of `iPad`, like:

`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15`

This makes user-agent detection not reliable when detecting iPad. As a workaround, you can use [`withFeatureCheck()`](/api/main/idata/with-feature-check) method to also detect for some iPad-specific browser features in addition to the usual user-agent detection.

## Code Example

### User-Agent Detection Only

```js [user-agent-detect.js]
import { UAParser } from 'ua-parser-js';

const parser = new UAParser();
const device = parser.getDevice();

if (device.is('iPad')) {
    console.log("Hi, looks like you're using an iPad!");
}
```

### User-Agent Detection + Feature Detection

```js [with-feature-detect.js]
import { UAParser } from 'ua-parser-js';

const parser = new UAParser();
const device = await parser.getDevice().withFeatureCheck();

if (device.is('iPad')) {
    console.log("Hi, looks like you're using an iPad");
}
```

## References

* [iPadOS brings breaking changes for developers🡥](https://docs.getupdraft.com/ios/ipados) *—Updraft Blog*
* [`withFeatureCheck()`](/api/main/idata/with-feature-check)