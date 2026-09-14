[`← Browser Name`](../name.md)

# KakaoStory

- **Developer:** Kakao
- **Development Status:** Active
- **Released:** 2012
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

KakaoStory is a social networking app operated by Kakao.

## Related Browsers

| Browser | Description |
| --- | --- |
| [`KakaoTalk`](./kakaotalk.md) | The in-app browser used by the KakaoTalk app. |
| [`KakaoStory`](./kakaostory.md) | The in-app browser detected in the KakaoStory app. |
| [`Daum`](./daum.md) | The in-app browser used by the Daum app. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 12; SM-G988N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.79 Mobile Safari/537.36 KAKAOSTORY/6.8.3_21046
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 12; SM-G988N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.79 Mobile Safari/537.36 KAKAOSTORY/6.8.3_21046';

console.log(parser.setUA(ua).getBrowser());
// {name: "KAKAOSTORY", version: "6.8.3_21046", major: "6", type: "inapp"}
```
