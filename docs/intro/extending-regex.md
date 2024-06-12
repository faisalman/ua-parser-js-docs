# Extending Regex

## Write Your Own Extension

To extend UAParser.js with your own regular expressions, you can pass a list of regexes to the extensions parameter when creating a new `UAParser` instance. This allows you to detect additional user-agent patterns that are not provided by default.

- `UAParser(uastring?: string, extensions?: UAParserExt, headers?: Record<string, string>)`

```js
// Example:
const myOwnListOfBrowsers = [
    [/(mybrowser)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION, ['type', 'bot']]
];

const myUA = 'Mozilla/5.0 MyBrowser/1.3';

const myParser = new UAParser({ browser: myOwnListOfBrowsers });

console.log(myParser.setUA(myUA).getBrowser());  // {name: "MyBrowser", version: "1.3", major: "1", type : "bot"}
console.log(myParser.getBrowser().is('bot'));    // true
```

```js
// Another example:
const myOwnListOfDevices = [
    [/(mytab) ([\w ]+)/i], [UAParser.DEVICE.VENDOR, UAParser.DEVICE.MODEL, [UAParser.DEVICE.TYPE, UAParser.DEVICE.TABLET]],
    [/(myphone)/i], [UAParser.DEVICE.VENDOR, [UAParser.DEVICE.TYPE, UAParser.DEVICE.MOBILE]]
];

const myUA2 = 'Mozilla/5.0 MyTab 14 Pro Max';

const myParser2 = new UAParser({
    browser: myOwnListOfBrowsers,
    device: myOwnListOfDevices
});

console.log(myParser2.setUA(myUA2).getDevice());  // {vendor: "MyTab", model: "14 Pro Max", type: "tablet"}
```

::: tip
When you pass custom regexes into the `UAParser` constructor, they will be ordered **before** the internal regexes. When the parser runs, it will first check the user-agent string against your custom regexes before checking against the internal regexes. This allows you to prioritize your custom patterns over the default ones.
:::

## Use Predefined Extensions Submodule

To use the predefined extensions, you can import the desired extensions from the [`ua-parser-js/extensions`↗](/api/submodules/extensions/overview) submodule.

```js
// Usage example
// Import the UAParser class and the extensions
import { UAParser } from 'ua-parser-js';
import { Emails } from 'ua-parser-js/extensions';

// Define a user-agent string
const ua = 'Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Thunderbird/78.13.0';

// Create a new parser instance with the Emails extension
const browser = new UAParser(Emails)
                    .setUA(ua)
                    .getBrowser();

// Output the parsed browser information
console.log(browser.toString()); // Thunderbird 78.13.0
```
You can also create a parser with multiple extensions:

```js
import { UAParser } from 'ua-parser-js';
import { Emails, Crawlers, Fetchers } from 'ua-parser-js/extensions';

// Multiple extensions can be passed as an array
const extendedParser = new UAParser([Emails, Crawlers, Fetchers]);
```
