# BrowserType

[↩ Back to Enums](/api/submodules/enums.md)

```csv:no-line-numbers
CRAWLER, CLI, EMAIL, FETCHER, INAPP, MEDIAPLAYER, LIBRARY
```
::: info
Find the example of various browser types in [**ua-parser-js/extensions**](/api/submodules/extensions/overview) submodule.
:::

## Code Example

```js
import { BrowserType } from 'ua-parser-js/enums';

if (UAParser().browser.is(BrowserType.MEDIAPLAYER)) {
    console.log('La la la..');
}
```