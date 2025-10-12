# UAParser Class Overview

## Constructor

```js:no-line-numbers
UAParser(uastring?: string, extensions?: UAParserExt, headers?: UAParserHeaders): IResult`
```

::: tip
- In browser environment, the User-Agent string is automatically taken from `window.navigator.userAgent`.
- In Node.js environment, you need to pass the User-Agent string manually, usually from `request.headers["user-agent"]`.
:::

::: warning
To ensure stable parsing performance and mitigate ReDoS attacks, User-Agent string longer than 500 chars will be automatically trimmed.
:::

- `new UAParser()`

When called *with* the `new` keyword, it will return a new instance of `UAParser`.

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

- `UAParser()`

When called *without* the `new` keyword, it will directly return the results of `getResult()`

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

## Methods
The methods are self explanatory, here's a small overview of available methods:

- [`getBrowser(): IBrowser`](/api/main/get-browser)
 
returns the browser name, version, and major.

- [`getCPU(): ICPU`](/api/main/get-cpu)
 
returns CPU architectural design name.

- [`getDevice(): IDevice`](/api/main/get-device)
 
returns the device model, type, vendor.
 
- [`getEngine(): IEngine`](/api/main/get-engine)
 
returns the browser engine name and version.
 
- [`getOS(): IOS`](/api/main/get-os)
 
returns the operating system name and version.
 
- [`getResult(): IResult`](/api/main/get-result)
 
returns all function object calls, user-agent string, browser info, cpu, device, engine, os.

- [`getUA(): string`](/api/main/get-ua)
 
returns the user-agent string.
 
- [`setUA(ua: string): UAParser`](/api/main/set-ua)
 
set a custom user-agent string to be parsed.

## Fields

- `static readonly VERSION: string`

Contains the current version of the library.

```js [example-version.js]
const UAParser = require('ua-parser-js');

console.log(`Current library version: ${UAParser.VERSION}`);
```

- `static readonly BROWSER: {
    NAME,
    VERSION, 
    MAJOR,
    TYPE
}`

Contains a list of the property names of [`IBrowser`](/api/main/get-browser).

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

- `static readonly CPU: { 
    ARCHITECTURE
}`

Contains a list of the property names of [`ICPU`](/api/main/get-cpu).

- `static readonly DEVICE: { 
    TYPE,
    VENDOR, 
    MODEL,
    CONSOLE,
    EMBEDDED,
    MOBILE,
    SMARTTV,
    TABLET,
    WEARABLE,
    XR
}`

Contains a list of the property names of [`IDevice`](/api/main/get-device) and possible values for [`IDevice.type`](/info/device/type).

```js [example-device.js]
const myOwnListOfDevices = [
    [/(mytab) ([\w ]+)/i], 
    [UAParser.DEVICE.VENDOR, UAParser.DEVICE.MODEL, [UAParser.DEVICE.TYPE, UAParser.DEVICE.TABLET]],
    [/(myphone)/i], 
    [UAParser.DEVICE.VENDOR, [UAParser.DEVICE.TYPE, UAParser.DEVICE.MOBILE]]
];
const myUA2 = 'Mozilla/5.0 MyTab 14 Pro Max';
const myParser2 = new UAParser({ device: myOwnListOfDevices });

console.log(myParser2.setUA(myUA2).getDevice());  
// {vendor: "MyTab", model: "14 Pro Max", type: "tablet"}
```

- `static readonly ENGINE: { 
    NAME,
    VERSION
}`

Contains a list of the property names of [`IEngine`](/api/main/get-engine).

- `static readonly OS: { 
    NAME,
    VERSION
}`

Contains a list of the property names of [`IOS`](/api/main/get-os).