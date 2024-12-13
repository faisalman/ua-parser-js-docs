# `getCPU(): ICPU`

Get type of CPU architecture from user-agent string.

## Properties of `ICPU`

```js
// CPU object is structured as follow:
{ 
    architecture: ""
}
```

### `architecture?: string`

::: info
See list of possible cpu architecture [here](/info/cpu/arch).
:::

## Methods of `ICPU`

Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<ICPU>(): PromiseLike<ICPU> | ICPU`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<ICPU>(): PromiseLike<ICPU> | ICPU`](/api/main/idata/with-feature-check)

## Code Example

```js
const powerpc = 'Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC Mac OS; en)'
const parser = new UAParser(powerpc);

console.log(parser.getCPU());
// { architecture : "ppc" }
```