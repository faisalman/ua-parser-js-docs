# [UAParser](/api/main/overview#methods) : getCPU()

### `getCPU(): ICPU`

Returns the CPU architecture name.

## `ICPU`

### Properties

```js
{ 
    architecture: ""
}
```

#### architecture?: string

The detected CPU architecture (e.g. `arm`, `amd64`, `ppc`, `x86`).

::: info
See list of possible CPU architectures [here](/info/cpu/arch).
:::

### Methods

#### Inherited from `IData`:

- [`is(value: string): boolean`](/api/main/idata/is)
- [`toString(): string`](/api/main/idata/to-string)
- [`withClientHints<ICPU>(): PromiseLike<ICPU> | ICPU`](/api/main/idata/with-client-hints)
- [`withFeatureCheck<ICPU>(): PromiseLike<ICPU> | ICPU`](/api/main/idata/with-feature-check)

### Code Example

```js
const powerpc = 'Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC Mac OS; en)'
const parser = new UAParser(powerpc);

console.log(parser.getCPU());
// { architecture : "ppc" }
```