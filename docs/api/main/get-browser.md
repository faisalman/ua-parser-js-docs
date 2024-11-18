# `getBrowser(): IBrowser`

Get browser name, full version, & major version from user-agent string.

```js
// Result object is structured as follow:
{ name: '', version: '', major: '', type: '' }
```

## Properties of `IBrowser`:

### `name?: string`

Name of current browser 

- [List of possible `browser.name`](/info/browser/name)

### `version?: string`

Version of current browser, determined dynamically from user-agent data. 

- `undefined` if browser version is not found.

### `major?: string`

Major number derived from the first number in `version`, following [semver↗](https://semver.org/), e.g: if `version` is `5.1.21214`, then `major` would be `5`.

- `undefined` if the browser has no `version`
- `""` if the first token in `version` is not a Number

### `type?: string`

Type of current browser, e.g: `email`, `inapp`, `crawler`. 

- [List of possible `browser.type`](/info/browser/type)
- [`ua-parser-js/extensions` submodule](/api/submodules/extensions/overview)

## Methods inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IBrowser>(): PromiseLike<IBrowser> | IBrowser`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IBrowser>(): PromiseLike<IBrowser> | IBrowser`](/api/main/idata/with-feature-check)

## Code Example

```js
const operamini = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25'
const parser = new UAParser(operamini);

console.log(parser.getBrowser());
// { name : "Opera Mini", version : "5.1.21214", major : "5" }
```