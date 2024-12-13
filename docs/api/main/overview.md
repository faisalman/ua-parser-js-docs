# UAParser Class Overview

## Constructor

```js:no-line-numbers
new UAParser(uastring?: string, extensions?: UAParserExt, headers?: UAParserHeaders): UAParser
```

When called *with* the `new` keyword, it will return a new instance of `UAParser`.

```js:no-line-numbers
UAParser(uastring?: string, extensions?: UAParserExt, headers?: UAParserHeaders): IResult`
```

When called *without* the `new` keyword, it will directly return the results of `getResult()`:

::: tip
In **BROWSER** environment you don't need to pass the user-agent string, as it should automatically get the string from the current `window.navigator.userAgent`.

Whereas in **NODE.JS** environment, user-agent string must be supplied, usually you can find it in: `request.headers["user-agent"]`.
:::

## Code Example

#### Using `new UAParser()`

```js
const parser = new UAParser("your user-agent here"); // you need to pass the user-agent for nodejs
console.log(parser); 
/* 
    UAParser instance
*/

const result = parser.getResult();
console.log(result);
/* 
    {
        ua      : "",
        browser : {},
        engine  : {},
        os      : {},
        device  : {},
        cpu     : {}
    }
*/
```

#### Using `UAParser()`

```js
const result = UAParser("your user-agent here");
console.log(result);
/* 
    {
        ua      : "",
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