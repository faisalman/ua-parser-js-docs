[`← Browser Name`](../name.md)

# Huawei Browser

- **Developer:** Huawei
- **Development Status:** Active
- **Platforms:** Windows, Android, HarmonyOS
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Huawei Browser is a web browser developed by Huawei for its devices.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 HBPC/11.0.2.302
```

##### Android

```sh
Mozilla/5.0 (Linux; Android 6.0.1; LYA-AL00；HMSCore/4.0.0 GMS/10.4 ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 HuaweiBrowser/10.0.3.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; LYA-AL00；HMSCore/4.0.0 ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 HuaweiBrowser/10.0.3.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; LYA-AL00；GMS/10.4 ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 HuaweiBrowser/10.0.3.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; LYA-AL00 ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.64 HuaweiBrowser/10.0.3.102 Mobile Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 HBPC/11.0.2.302';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Huawei Browser", version: "11.0.2.302", major: "11"}

console.log(browser.is(BrowserName.HUAWEI));
// true
```
