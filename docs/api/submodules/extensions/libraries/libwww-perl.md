[`← Libraries`](../libraries.md)

# libwww-perl

libwww-perl is a collection of Perl modules for sending requests on the web.

## User-Agent Examples

```sh
libwww-perl/6.05
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('libwww-perl/6.05').getBrowser());
// {name: "libwww-perl", version: "6.05", major: "6", type: "library"}
```

## References

- [libwww-perl🡥](https://metacpan.org/dist/libwww-perl)
