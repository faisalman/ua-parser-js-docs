# How to Detect iOS ≥ 26

## Reported iOS Version Is No Longer Reliable

Starting with Safari on iOS 26, you can no longer rely on the User-Agent string to determine the real iOS version. This issue is because WebKit (the underlying engine developed by Apple that powers all browsers on iOS) now freezes the reported iOS version at `18.6` on newer releases:

- [Safari on iOS/iPadOS/visionOS 26: "user agent string no longer lists the current version of the operating system"🡥](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/#update-to-ua-string) *—Webkit Blog*

## User-Agent String Examples

An example of User-Agent string on iOS 18.6:

- `Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1`

Meanwhile, the User-Agent string on iOS 26:

- `Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1`

Notice that `iPhone OS` is still reported as `18_6`, even though the actual OS version is `26`. This makes common user-agent parsing unreliable for detecting newer iOS versions.

## Detecting the Real iOS Version with UAParser.js

If you're using UAParser.js version `2.0.6` or later, this issue is handled automatically as the iOS version will be correctly detected as `26.0` instead of `18.6`:

```js
import { UAParser } from 'ua-parser-js';

const ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1";
const uap = new UAParser(ua);
const os = uap.getOS();

console.log(os);
// { name: 'iOS', version: '26.0' }
```