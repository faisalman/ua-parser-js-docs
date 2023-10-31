# Extensions 

`ua-parser-js/extensions`

## List of Built-in Extensions:

- [Apps ↗](apps.md)
- [Bots ↗](bots.md)
- [CLIs ↗](clis.md)
- ExtraDevices ↗
- [Emails ↗](emails.md)
- [MediaPlayers ↗](media-players.md)
- [Modules ↗](modules.md)

## Code Example

```js
import { Bots, CLIs, Emails } from 'ua-parser-js/extensions';

const googleBot = 'Googlebot-Video/1.0';
const facebookBot = 'Mozilla/5.0 (compatible; FacebookBot/1.0; +https://developers.facebook.com/docs/sharing/webmasters/facebookbot/)';
const wget = 'Wget/1.21.1';

/*
    try extends parser with Emails extension
*/
const emailParser = new UAParser(Emails);
console.log(emailParser.setUA(thunderbird).getBrowser());
// {name: "Thunderbird", version: "78.13.0", major: "78", type: "email"});

/*
    try merging multiple extensions
*/
const botAndCLIParser = new UAParser({ 
    browser : [...Bots.browser, ...CLIs.browser]
});

console.log(botAndCLIParser.setUA(wget).getBrowser());
// {name: "Wget", version: "1.21.1", major: "1", type:"cli"});

console.log(botAndCLIParser.setUA(facebookBot).getBrowser());
// {name: "FacebookBot", version: "1.0", major: "1", type:"bot"});
```