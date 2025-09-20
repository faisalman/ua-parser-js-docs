# [Quick Start](/intro/quick-start/quick-start) : Using ESM / TypeScript

To get started, install UAParser.js using npm

```sh
$ npm install ua-parser-js
```
Then, import the library in your application

```js
import { UAParser } from 'ua-parser-js';

const { browser, cpu, device } = UAParser('Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2a1pre) Gecko/20090928 Firefox/3.5 Maemo Browser 1.4.1.22 RX-51 N900');

console.log(browser.name);          // Maemo Browser
console.log(cpu.is('arm'));         // true
console.log(device.is('mobile'));   // true
console.log(device.model);          // N900
```