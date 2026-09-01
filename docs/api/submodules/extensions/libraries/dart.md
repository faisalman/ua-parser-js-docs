[`← Libraries`](../libraries.md)

# Dart

Dart is a programming language for building multiplatform applications.

## User-Agent Examples

```sh
Dart/3.5 (dart:io)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { Libraries } from 'ua-parser-js/extensions';

const libParser = new UAParser(Libraries);

console.log(libParser.setUA('Dart/3.5 (dart:io)').getBrowser());
// {name: "Dart", version: "3.5", major: "3", type: "library"}
```

## References

- [Dart🡥](https://dart.dev/)
