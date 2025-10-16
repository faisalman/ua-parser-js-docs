# `UAParser` Class

## Constructor

```js:no-line-numbers
UAParser(uastring?: string, extensions?: UAParserExt, headers?: UAParserHeaders): IResult`
```

### new UAParser()

When called *with* the `new` keyword, it returns a new `UAParser` instance.

```js [example-with-new.js]
const parser = new UAParser("your user-agent here");
console.log(parser); 
/* 
    UAParser instance
*/

const result = parser.getResult();
console.log(result);
/* 
    {
        ua      : "your user-agent here",
        browser : {},
        engine  : {},
        os      : {},
        device  : {},
        cpu     : {}
    }
*/
```

### UAParser()

When called *without* the `new` keyword, it directly returns the result of `getResult()`.

::: tip
`UAParser()` equals with `new UAParser().getResult()`
:::

```js [example-without-new.js]
const result = UAParser("your user-agent here");
console.log(result);
/* 
    {
        ua      : "your user-agent here",
        browser : {},
        engine  : {},
        os      : {},
        device  : {},
        cpu     : {}
    }
*/
```

::: tip
- In browser environment, if the User-Agent string is not set, it will be automatically taken from `window.navigator.userAgent`.
- In Node.js environment, you'll need to pass the User-Agent string manually, usually from `request.headers["user-agent"]`.
:::

::: warning
To ensure stable parsing performance and mitigate ReDoS risks, any User-Agent string longer than **500** characters will be automatically trimmed.
:::

## Methods
The methods are self explanatory, here's a quick overview of available methods:

#### [`getBrowser(): IBrowser`](/api/main/get-browser)
 
Returns the browser `name`, `version`, `major`, and `type`.

#### [`getCPU(): ICPU`](/api/main/get-cpu)
 
Returns the CPU `architecture`.

#### [`getDevice(): IDevice`](/api/main/get-device)
 
Returns the device `type`, `vendor`, and `model`.
 
#### [`getEngine(): IEngine`](/api/main/get-engine)
 
Returns the browser engine `name` and `version`.
 
#### [`getOS(): IOS`](/api/main/get-os)
 
Returns the operating system `name` and `version`.
 
#### [`getResult(): IResult`](/api/main/get-result)
 
Returns a full breakdown of the detected user-agent. Including user-agent string, browser, CPU, device, engine, and OS info.

#### [`getUA(): string`](/api/main/get-ua)
 
Returns the user-agent string of current instance.
 
#### [`setUA(ua: string): UAParser`](/api/main/set-ua)
 
Sets a custom user-agent string to be parsed.

## Fields

- `static readonly VERSION: string`

The current version of the library.

- `static readonly BROWSER: { NAME: 'name', VERSION: 'version', MAJOR: 'major', TYPE: 'type' }`

List of [`IBrowser`](/api/main/get-browser) properties.

- `static readonly CPU: { ARCHITECTURE: 'architecture' }`

List of [`ICPU`](/api/main/get-cpu) properties.

- `static readonly DEVICE: { TYPE: 'type', VENDOR: 'vendor', MODEL: 'model', CONSOLE: 'console', EMBEDDED: 'embedded', MOBILE: 'mobile', SMARTTV: 'smarttv', TABLET: 'tablet', WEARABLE: 'wearable', XR: 'xr' }`

List of [`IDevice`](/api/main/get-device) properties, and list of possible values for [`IDevice.type`](/info/device/type).

- `static readonly ENGINE: { NAME: 'name', VERSION: 'version' }`

List of [`IEngine`](/api/main/get-engine) properties.

- `static readonly OS: { NAME: 'name', VERSION: 'version' }`

List of [`IOS`](/api/main/get-os) properties.

### Code Example

```js [example-version.js]
const UAParser = require('ua-parser-js');

console.log(`Current library version: ${UAParser.VERSION}`);
```

```js [example-browser.js]
const myOwnListOfBrowsers = [
    [/(mybrowser)\/([\w\.]+)/i], 
    [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]
];
const myUA = 'Mozilla/5.0 MyBrowser/1.3';
const myParser = new UAParser({ browser: myOwnListOfBrowsers });

console.log(myParser.setUA(myUA).getBrowser());  
// {name: "MyBrowser", version: "1.3", major: "1"}
```

```js [example-custom-device.js]
const myOwnList = [
    [/(mytab) ([\w ]+)/i], 
    [UAParser.DEVICE.VENDOR, UAParser.DEVICE.MODEL, [UAParser.DEVICE.TYPE, UAParser.DEVICE.TABLET]]
];
const myUA = 'Mozilla/5.0 MyTab 14 Pro Max';
const myParser = new UAParser({ device: myOwnList });

console.log(myParser.setUA(myUA).getDevice());  
// {vendor: "MyTab", model: "14 Pro Max", type: "tablet"}
```