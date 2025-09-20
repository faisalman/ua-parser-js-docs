# [Enums](/api/submodules/enums/overview) : BrowserType

```csv:no-line-numbers
CRAWLER, CLI, EMAIL, FETCHER, INAPP, MEDIAPLAYER, LIBRARY
```
::: info
Find the example of various browser types in [Extensions](/api/submodules/extensions/overview) submodule.
:::

## Code Example

```js [now-playing.js]
import { UAParser } from 'ua-parser-js'; 
import { BrowserType } from 'ua-parser-js/enums';

if (UAParser().browser.is(BrowserType.MEDIAPLAYER)) {
    console.log('La la la..');
}
```