# Using TypeScript

```sh
$ npm install ua-parser-js
$ npm install --save-dev @types/ua-parser-js
```

## Code Example

```ts
import { UAParser } from 'ua-parser-js'; 

const parser = new UAParser();
console.log(parser.getResult());
```
