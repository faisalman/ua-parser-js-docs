[`← Libraries`](../libraries.md)

# Java

Java is a programming platform whose standard library includes HTTP networking APIs.

## User-Agent Examples

```sh
Java/1.6.0_14
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Java/1.6.0_14').getBrowser());
// {name: "Java", version: "1.6.0_14", major: "1", type: "library"}
```

## References

- [Java🡥](https://www.java.com/)
