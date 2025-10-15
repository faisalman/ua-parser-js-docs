# [extensions](/api/submodules/extensions/overview) : Emails

Extends [`browser`](/api/main/get-browser) detection to include apps that allow users to read, reply to, and organize their emails.

- `Airmail`
- `BlueMail`
- `DaumMail`
- `eMClient`
- `Evolution`
- `KMail`
- `Kontact`
- `Mail`
- `Microsoft Outlook`
- `NaverMailApp`
- `Polymail`
- `ProtonMail`
- `SparkDesktop`
- `Sparrow`
- `Thunderbird`
- `Yahoo`
- `Zimbra`
- `ZohoMail-Desktop`
- ... etc.


## Code Example

```js
import { Emails } from 'ua-parser-js/extensions';

const emailParser = new UAParser(Emails);
```