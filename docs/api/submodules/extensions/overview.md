# Extensions Submodule

### `'ua-parser-js/extensions'`

## List of Built-in Extensions:

- [`CLIs`](clis.md)
- [`Crawlers`](crawlers.md)
- [`ExtraDevices`](extra-devices.md)
- [`Emails`](emails.md)
- [`Fetchers`](fetchers.md)
- [`InApps`](inapps.md)
- [`Libraries`](libraries.md)
- [`MediaPlayers`](media-players.md)

::: tip
`Bots` is a combination of `CLIs`, `Crawlers`, `Fetchers`, and `Libraries`, merged together while preserving the browser type.
:::

## Code Example

```js
import { Crawlers, CLIs, Emails } from 'ua-parser-js/extensions';

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
const botParser = new UAParser({ 
    browser : [...Crawlers.browser, ...CLIs.browser]
});
// or simply:
const botParser2 = new UAParser([Crawlers, CLIs]);

console.log(botParser.setUA(wget).getBrowser());
// {name: "Wget", version: "1.21.1", major: "1", type:"cli"});

console.log(botParser2.setUA(facebookBot).getBrowser());
// {name: "FacebookBot", version: "1.0", major: "1", type:"bot"});
```