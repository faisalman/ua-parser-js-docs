# Helpers

## List of Built-in Helpers:

- `isFrozenUA(string):boolean`
To match a string with a frozen user-agent pattern

## Code Example

```js
import { isFrozenUA } from 'ua-parser-js/helpers';

const regularMobileUA = "Mozilla/5.0 (Linux; Android 9; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Mobile Safari/537.36";
const freezedMobileUA = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Mobile Safari/537.36";

console.log(isFrozenUA(regularMobileUA));
// false

console.log(isFrozenUA(freezedMobileUA));
// true
```