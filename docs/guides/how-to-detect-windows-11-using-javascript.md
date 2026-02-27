# How to Detect Windows 11

## Reported Windows Version Is No Longer Reliable

It's currently impossible to detect Windows 11 and later using only user-agent string, since most browser vendors are unknowingly cap the Windows version at 10.

::: info
Since rolling out its [user-agent reduction](https://www.chromium.org/updates/ua-reduction/#token-reference) program, Chromium-based browsers in Windows will always identify itself as: `Windows NT 10.0`.
:::

## Detecting Windows 11 with UAParser.js

Luckily, there is a kind of workaround by utilizing client hints feature:

```js
const uap = new UAParser();

let os = uap.getOS();
console.log('Based on user agent: ', os); 
// { name: "Windows", version: "10" }

uap.getOS().withClientHints().then(os => {
    console.log('Based on client hints', os); 
    // { name: "Windows", version: "11" }
});
```

::: warning LIMITATION
Client hints feature is only supported in Chromium-based browsers (Chrome, Edge, etc.). In other browsers like Firefox and Safari, `withClientHints()` gives no effect to the result and still detected as `Windows 10`.
:::


References:

- [`withClientHints()`](/api/main/idata/with-client-hints)
- [Detect Windows 11 and CPU architecture using User-Agent Client Hints🡥](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/how-to-detect-win11) *—Microsoft*