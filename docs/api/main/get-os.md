# `getOS(): IOS`

Get operating system name & version from user-agent string.

## Properties of `IOS`:

```js
// OS object is structured as follow:
{ 
    name: "", 
    version: ""
}
```

### `name?: string`

::: info
See list of possible os name [here](/info/os/name).
:::

---
### `version?: string` 

Determined dynamically.

## Methods of `IOS`

Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<IOS>(): PromiseLike<IOS> | IOS`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<IOS>(): PromiseLike<IOS> | IOS`](/api/main/idata/with-feature-check)

## Code Example

```js

const galaxytabs8 = 'Mozilla/5.0 (Linux; Android 12; SM-X706B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36'
const parser = new UAParser(galaxytabs8);

console.log(parser.getOS());
// { name : "Android", version : "12" }
```
