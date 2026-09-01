[`← Libraries`](../libraries.md)

# Apache Nutch

Apache Nutch is an extensible and scalable web crawler written in Java.

## User-Agent Examples

```sh
AliyunSecBot/Nutch-1.21-SNAPSHOT
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('AliyunSecBot/Nutch-1.21-SNAPSHOT').getBrowser());
// {name: "Nutch", version: "1.21-SNAPSHOT", major: "1", type: "library"}
```

## References

- [Apache Nutch🡥](https://nutch.apache.org/)
