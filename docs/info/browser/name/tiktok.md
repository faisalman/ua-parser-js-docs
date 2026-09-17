[`← Browser Name`](../name.md)

# TikTok

- **Developer:** ByteDance
- **Development Status:** Active
- **Released:** 2016
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

TikTok is a short-form video app with an integrated web browser.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 11; 21061119AG Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36 trill_2022109040 JsSdk/1.0 NetType/MOBILE Channel/googleplay AppName/musical_ly app_version/21.9.4 ByteLocale/ru-RU ByteFullLocale/ru-RU Region/KG BytedanceWebview/d8a21c6
Mozilla/5.0 (Linux; Android 10; STK-LX1 Build/HONORSTK-LX1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/110.0.5481.153 Mobile Safari/537.36 musical_ly_2022803040 JsSdk/1.0 NetType/WIFI Channel/huaweiadsglobal_int AppName/musical_ly app_version/28.3.4 ByteLocale/en ByteFullLocale/en Region/IQ Spark/1.2.7-alpha.8 AppVersion/28.3.4 PIA/1.5.11 BytedanceWebview/d8a21c6
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_21.1.0 JsSdk/2.0 NetType/4G Channel/App Store ByteLocale/ru Region/RU ByteFullLocale/ru-RU isDarkMode/1 WKWebView/1 BytedanceWebview/d8a21c6
Mozilla/5.0 (iPhone; CPU iPhone OS 18_6_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1 trill_43.0.0 BytedanceWebview/d8a21c6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 11; 21061119AG Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36 trill_2022109040 JsSdk/1.0 NetType/MOBILE Channel/googleplay AppName/musical_ly app_version/21.9.4 ByteLocale/ru-RU ByteFullLocale/ru-RU Region/KG BytedanceWebview/d8a21c6';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "TikTok", version: "21.9.4", major: "21", type: "inapp"}

console.log(browser.is(BrowserName.TIKTOK));
// true
```
