<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `lua-resty-http`*</sup>

# lua-resty-http

- **Developer:** ledge
- **BrowserType:** [`library`](/info/browser/type/library)

lua-resty-http is an HTTP client for OpenResty and ngx_lua.

## User-Agent Examples

```sh
lua-resty-http/0.07 (Lua)
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('lua-resty-http/0.07 (Lua)').getBrowser();

console.log(browser);
// {name: "lua-resty-http", version: "0.07", major: "0", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.LUA_RESTY_HTTP));
// true
```

## References

- [lua-resty-http🡥](https://github.com/ledgetech/lua-resty-http)
