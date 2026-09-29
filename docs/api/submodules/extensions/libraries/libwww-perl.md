<sup>*[`Extensions Submodule`](../overview.md) > [`Libraries`](../libraries.md) > `libwww-perl`*</sup>

# libwww-perl

- **Developer:** Gisle Aas
- **BrowserType:** [`library`](/info/browser/type/library)

libwww-perl is a collection of Perl modules for sending requests on the web.

## User-Agent Examples

```sh
libwww-perl/6.05
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const libParser = new UAParser(Libraries);
const browser = libParser.setUA('libwww-perl/6.05').getBrowser();

console.log(browser);
// {name: "libwww-perl", version: "6.05", major: "6", type: "library"}

// Compare using the built-in enum
const { Library } = Extension.BrowserName;
console.log(browser.is(Library.LIBWWW_PERL));
// true
```

## References

- [libwww-perl🡥](https://metacpan.org/dist/libwww-perl)
