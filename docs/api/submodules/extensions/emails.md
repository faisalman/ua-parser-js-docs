<sup>*[`Extensions Submodule`](./overview.md) > `Emails`*</sup>

# `Emails`

Extends [`browser`](/info/browser/name) detection to include apps that allow users to read, reply to, and organize their emails.

## List of Detected Email Clients

| **Email Client** |   |   |
| --- | --- | --- |
| `Airmail` | `Kontact` | `R2Mail2` |
| `Alpine` | `Lotus-Notes` | `Rainloop` |
| `Android` | `Mail` | `Roundcube Webmail` |
| `AquaMail` | `Mailbird` | `SamsungEmail` |
| `Balsa` | `MailMate` | `SparkDesktop` |
| `Barca` | `Mailspring` | `Sparrow` |
| `BlueMail` | `Microsoft Outlook` | `Spicebird` |
| `Canary` | `Mutt` | `SquirrelMail` |
| `Claws Mail` | `NaverMailApp` | `Sylpheed` |
| `DaumMail` | `Newton` | `The Bat!` |
| `eMClient` | `Nine` | `Thunderbird` |
| `Eudora` | `NylasMail` | `Trojita` |
| `Evolution` | `Outlook-Express` | `Turnpike` |
| `FairEmail` | `Pegasus Mail` | `tutanota-desktop` |
| `Geary` | `PocoMail` | `Wanderlust` |
| `Gnus` | `Polymail` | `Windows-Live-Mail` |
| `Horde::IMP` | `Postbox` | `Yahoo` |
| `IncrediMail` | `ProtonMail` | `Zimbra` |
| `K-9 Mail` | `ProtonMail Bridge` | `ZohoMail-Desktop` |
| `KMail` | `Quala` |  |

## Code Example

```js
import { Emails } from 'ua-parser-js/extensions';

const emailParser = new UAParser(Emails);
```