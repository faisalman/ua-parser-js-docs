# `IDevice`

```js
{
    type: "",
    vendor: "",
    model: ""
}
```

## Properties

### `type?: string`

The detected device type, such as `mobile`, `tablet`, `smarttv`, or `wearable`.

::: tip
See the [list of device types](/info/device/type).
:::

### `vendor?: string`

The device manufacturer, such as `Samsung`, `Apple`, or `Huawei`.

::: tip
See the [list of device vendors](/info/device/vendor).
:::

### `model?: string`

The detected model name, determined dynamically from the user-agent string.

## Inherited methods

[`is()`](/api/main/idata/is), [`toString()`](/api/main/idata/to-string), [`withClientHints()`](/api/main/idata/with-client-hints), and [`withFeatureCheck()`](/api/main/idata/with-feature-check) are inherited from [`IData`](/api/main/idata).
