[`← Browser Type`](../type.md)

# `email`

Software used to access and manage a user's email.

::: tip
See the full list of detected values in the [`Emails`](/api/submodules/extensions/emails) extension.
:::

## User-Agent Examples

```sh
# Thunderbird
Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Thunderbird/78.13.0

# Microsoft Outlook
Microsoft Office/16.0 (Windows NT 10.0; Microsoft Outlook 16.0.5431; Pro)

# Apple Mail
Mail/3826.500.181.1.5 CFNetwork/3826.500.111.1.1 Darwin/24.4.0

# K-9 Mail
K-9 Mail/5.600

# FairEmail
FairEmail/1.2066 (Android 13; Pixel 7)

# ProtonMail
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) ProtonMail/1.4.0 Chrome/122.0.6261.156 Electron/29.4.6 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Emails } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const parser = new UAParser(Emails);

console.log(parser.setUA('Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Thunderbird/78.13.0').getBrowser());
// {name: "Thunderbird", version: "78.13.0", major: "78", type: "email"}

console.log(parser.browser.is(BrowserType.EMAIL));
// true
```
