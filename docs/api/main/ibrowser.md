# `IBrowser`

```js
{
    name: "",
    version: "",
    major: "",
    type: ""
}
```

## Properties

### `name?: string`

The browser name.

::: tip
See the [list of browser names](/info/browser/name).
:::

### `version?: string`

The full browser version, or `undefined` if no version is found.

### `major?: string`

The first numeric component of `version`, following [semantic versioning](https://semver.org/). It is `undefined` when no version exists and an empty string when the first version component is not numeric.

### `type?: string`

The browser type, such as `email`, `inapp`, or `crawler`.

::: tip
* See the [list of browser types](/info/browser/type).
* Also see the [extensions](/api/submodules/extensions/overview) submodule for more examples.
:::

## Inherited methods

[`is()`](/api/main/idata/is), [`toString()`](/api/main/idata/to-string), [`withClientHints()`](/api/main/idata/with-client-hints), and [`withFeatureCheck()`](/api/main/idata/with-feature-check) are inherited from [`IData`](/api/main/idata).
