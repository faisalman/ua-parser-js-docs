# `IResult`

```js
{
    ua: "",
    browser: {},
    cpu: {},
    device: {},
    engine: {},
    os: {}
}
```

## Properties

### `ua: string`

The user-agent string of the current instance.

### [`browser: IBrowser`](/api/main/ibrowser)

The browser name, version, major version, and type.

### [`cpu: ICPU`](/api/main/icpu)

The CPU architecture.

### [`device: IDevice`](/api/main/idevice)

The device type, vendor, and model.

### [`engine: IEngine`](/api/main/iengine)

The browser engine name and version.

### [`os: IOS`](/api/main/ios)

The operating-system name and version.

## Inherited methods

[`is()`](/api/main/idata/is), [`toString()`](/api/main/idata/to-string), [`withClientHints()`](/api/main/idata/with-client-hints), and [`withFeatureCheck()`](/api/main/idata/with-feature-check) are inherited from [`IData`](/api/main/idata).
