[`← Libraries`](../libraries.md)

# lua-resty-http

lua-resty-http is an HTTP client for OpenResty and ngx_lua.

## User-Agent Examples

```sh
lua-resty-http/0.07 (Lua)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('lua-resty-http/0.07 (Lua)').getBrowser());
// {name: "lua-resty-http", version: "0.07", major: "0", type: "library"}
```

## References

- [lua-resty-http🡥](https://github.com/ledgetech/lua-resty-http)
