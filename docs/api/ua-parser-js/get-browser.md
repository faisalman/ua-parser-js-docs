# `getBrowser(): IBrowser`

Get browser name, full version, & major version from user-agent string.

```js
// Result object is structured as follow:
{ name: '', version: '', major: '', type: '' }
```

## `name?: string`

Name of current browser 

- [List of possible `browser.name`](/list/browser/name)

## `version?: string`

Version of current browser, determined dynamically from user-agent data. 

- `undefined` if browser version is not found.

## `major?: string`

Major number derived from the first number in `version`, following [semver↗](https://semver.org/), e.g: if `version` is `5.1.21214`, then `major` would be `5`.

- `undefined` if the browser has no `version`
- `""` if the first token in `version` is not a Number

## `type?: string`

Type of current browser, e.g: `email`, `inapp`, `crawler`. 

- [List of possible `browser.type`](/list/browser/type)
- [`ua-parser-js/extensions` submodule](/api/submodules/extensions/overview)


## Code Example

```js
const operamini = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25'
const parser = new UAParser(operamini);

console.log(parser.getBrowser());
// { name : "Opera Mini", version : "5.1.21214", major : "5" }
```