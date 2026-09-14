[`← Browser Name`](../name.md)

# KakaoTalk

- **Developer:** Kakao
- **Development Status:** Active
- **Released:** 2010
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

KakaoTalk is a messaging app operated by Kakao with an integrated web browser.

## Related Browsers

| Browser | Description |
| --- | --- |
| [`KakaoTalk`](./kakaotalk.md) | The in-app browser used by the KakaoTalk app. |
| [`KakaoStory`](./kakaostory.md) | The in-app browser detected in the KakaoStory app. |
| [`Daum`](./daum.md) | The in-app browser used by the Daum app. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 12; SM-G988N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.79 Mobile Safari/537.36;KAKAOTALK 2409760
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU; iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 BizWebView KAKAOTALK 9.7.6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 12; SM-G988N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.79 Mobile Safari/537.36;KAKAOTALK 2409760';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "KAKAOTALK", version: "2409760", major: "2409760", type: "inapp"}

console.log(browser.is(BrowserName.KAKAO));
// true
```
