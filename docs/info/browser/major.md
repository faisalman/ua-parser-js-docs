# [`IBrowser`](/api/main/get-browser.md) : major

### `major?: string`

Major version number of the browser (following [semver🡥](https://semver.org/)), derived from the [`browser.version`](/info/browser/version) value following these rules:

| `browser.version` value | `browser.major` value | Example |
| - | - | - |
| Starts with a number            | First number of the version | `5.1.21214` => `5` |
| Starts with a non-numeric value | `""` (empty string)         | `X.Y.Z` => `""` |
| `undefined`                     | `undefined`                 | - |