# How to Detect iOS ≥ 26

Starting with Safari on iOS 26, you can no longer rely on the User-Agent string to determine iOS version. This issue is because WebKit (the underlying engine developed by Apple that powers all browsers on iOS) now freezes the reported iOS version at `18.6`:

- [Safari on iOS/iPadOS/visionOS 26: "user agent string no longer lists the current version of the operating system"�](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/#update-to-ua-string) *—Webkit Blog*

::: info
An example of User-Agent string on iOS 18.6:

`Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1`

Meanwhile the User-Agent string on iOS 26:

`Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1`
:::

---

::: tip
Since UAParser.js version `2.0.6`, the iOS version will be correctly detected as `26.x` instead of `18.6`. Whereas for version `2.0.5` and below, you can use a _temporary workaround_ like this:

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName, OSName } from 'ua-parser-js/enums';

function getiOSVersion (ua) {
    const { browser, os } = UAParser(ua);
    if (browser.name  == BrowserName.SAFARI_MOBILE &&
        browser.major == '26' &&
        os.name       == OSName.IOS &&
        os.version    == '18.6') {
            return '26';
    } else {
            return os.version;
    }
}

const safari18 = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1";
const safari26 = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1"

console.log(getiOSVersion(safari18)); // 18.6
console.log(getiOSVersion(safari26)); // 26
```
:::