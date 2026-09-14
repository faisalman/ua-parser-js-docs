[`← Browser Name`](../name.md)

# Daum

- **Developer:** Kakao
- **Development Status:** Active
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Daum is a South Korean web portal app operated by Kakao.

## Related Browsers

| Browser | Description |
| --- | --- |
| [`KakaoTalk`](./kakaotalk.md) | The in-app browser used by the KakaoTalk app. |
| [`KakaoStory`](./kakaostory.md) | The in-app browser detected in the KakaoStory app. |
| [`Daum`](./daum.md) | The in-app browser used by the Daum app. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 11; SM-G970N Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 DaumApps/7.5.0 DaumDevice/mobile
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Safari/605.1.15 Mobile/15E148 DaumApps/7.5.1 DaumDevice/mobile
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 11; SM-G970N Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 DaumApps/7.5.0 DaumDevice/mobile';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Daum", version: "7.5.0", major: "7", type: "inapp"}

console.log(browser.is(BrowserName.DAUM));
// true
```
