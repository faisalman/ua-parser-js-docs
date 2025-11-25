# [UAParser](/api/main/overview#methods) : getResult()

### `getResult(): IResult`

Returns a full breakdown of the detected user-agent. Including user-agent string, browser, CPU, device, engine, and OS info.

## `IResult`

### Properties

```js
{ 
    ua: "", 
    browser: { 
        name: "", 
        version: "",
        major: "",
        type: ""
    }, 
    cpu: {
        architecture: ""
    }, 
    device: {
        vendor: "",
        model: "",
        type: ""
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

- `ua: string`

The user-agent string of current instance.

- [`browser: IBrowser`](/api/main/get-browser)

The browser name, version, major, and type.

- [`cpu: ICPU`](/api/main/get-cpu)

The CPU architecture.

- [`device: IDevice`](/api/main/get-device)

The device type, vendor, and model.

- [`engine: IEngine`](/api/main/get-engine)

The browser engine name and version.

- [`os: IOS`](/api/main/get-os)

The operating system name and version.

### Methods

#### Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IResult>(): PromiseLike<IResult> | IResult`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IResult>(): PromiseLike<IResult> | IResult`](/api/main/idata/with-feature-check)

### Code Example

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
        major: "103",
        type: undefined
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