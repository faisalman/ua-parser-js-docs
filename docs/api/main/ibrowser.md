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

The first numeric component of `version`:

| `version` | `major` | Explanation |
| --- | --- | --- |
| `"123.0.1"`, `"v123.0.1"` | `"123"` | Numeric characters from the first component of version |
| `"XP"`, `"alpha.1"` | `""` | Empty string when no numeric in the first component |
| `undefined` | `undefined` | `undefined` when no version found |

### `type?: string`

The browser type, such as `email`, `inapp`, or `crawler`.

::: tip
* See the [list of browser types](/info/browser/type).
* Also see the [extensions](/api/submodules/extensions/overview) submodule for more examples.
:::

## Inherited methods

[`is()`](/api/main/idata/is), [`toString()`](/api/main/idata/to-string), [`withClientHints()`](/api/main/idata/with-client-hints), and [`withFeatureCheck()`](/api/main/idata/with-feature-check) are inherited from [`IData`](/api/main/idata).
