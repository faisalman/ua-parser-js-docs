# `getResult(): IResult`

Get all information regarding browser, CPU, device, engine, & OS from user-agent string.

```js
// Result object is structured as follow:
{ 
    ua: "", 
    browser: { 
        name: "", 
        version: "",
        major: ""
    }, 
    cpu: {
        architecture: ""
    }, 
    device: {
        type: "",
        vendor: "",
        model: ""
    }, 
    engine: {
        name: "",
        version: ""
    }, 
    os: {
        name: "",
        version: ""
    }
}
```

## Properties of `IResult`:

### `ua: string`

The user-agent string value of current instance.

### [`browser: IBrowser`](/api/main/get-browser)

Object that contains the value of browser name, full version, & major version.

### [`cpu: ICPU`](/api/main/get-cpu)

Object that contains the value of type of CPU architecture.

### [`device: IDevice`](/api/main/get-device)

Object that contains the value of device details: type, vendor, model.

### [`engine: IEngine`](/api/main/get-engine)

Object that contains the value of layout rendering engine name & version.

### [`os: IOS`](/api/main/get-os)

Object that contains the value of operating system name & version.

## Methods inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IResult>(): PromiseLike<IResult> | IResult`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IResult>(): PromiseLike<IResult> | IResult`](/api/main/idata/with-feature-check)

## Code Example

```js
const galaxytabs8 = 'Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
const parser = new UAParser(galaxytabs8);

console.log(parser.getResult());
/*
{ 
    ua: "Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36", 
    browser: { 
        name: "Chrome", 
        version: "103.0.5060.53",
        major: "103"
    }, 
    cpu: {
        architecture: undefined
    }, 
    device: {
        type: "mobile",
        vendor: "Huawei",
        model: "SM-X706B"
    },
    engine: {
        name: "Blink",
        version: "103.0.5060.53"
    }, 
    os: {
        name: "Android",
        version: "12"
    }
}
*/
```