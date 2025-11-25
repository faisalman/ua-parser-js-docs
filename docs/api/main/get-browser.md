# [UAParser](/api/main/overview#methods) : getBrowser()

### `getBrowser(): IBrowser`

Returns the browser name, full version, major version, and browser type.

## `IBrowser`

### Properties


```js
{ 
    name: "", 
    version: "", 
    major: "", 
    type: ""
}
```

#### name?: string

The browser name

::: info
See list of possible browser name [here](/info/browser/name).
:::

#### version?: string

The full version of the browser, determined dynamically from user-agent string, or `undefined` if no version is found.

#### major?: string

The major version number, derived from the first number in `version` following [semver🡥](https://semver.org/). For example, if `version` is `5.1.21214`, then `major` would be `5`.

::: info
- `undefined` if the browser has no `version`
- `""` (empty) if the first token in `version` is not a Number
:::

#### type?: string

The browser type, e.g: `email`, `inapp`, `crawler`. 

::: info
See full list of possible browser types [here](/info/browser/type).
:::

::: tip
For examples of various browser types, check out the [**ua-parser-js/extensions**](/api/submodules/extensions/overview) submodule.
:::

### Methods

#### Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IBrowser>(): PromiseLike<IBrowser> | IBrowser`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IBrowser>(): PromiseLike<IBrowser> | IBrowser`](/api/main/idata/with-feature-check)

### Code Example

```js
const operamini = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25'
const parser = new UAParser(operamini);

console.log(parser.getBrowser());
// { name: "Opera Mini", version: "5.1.21214", major: "5", type: undefined }
```