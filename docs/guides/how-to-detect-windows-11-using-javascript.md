# How to Detect Windows 11

It's currently impossible to detect Windows 11 only from user-agent data, since most browser vendors are unknowingly cap the Windows version at 10. 

Luckily, there is a workaround by utilizing client hints feature:

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

::: warning
Client hints feature is only supported in Chromium-based browsers (Chrome, Edge, etc.). In other browsers like Firefox and Safari, `withClientHints()` gives no effect to the result, thus it will still be detected as Windows 10.
:::


References:

- [`withClientHints()`](/api/main/idata/with-client-hints)
- [Detect Windows 11 and CPU architecture using User-Agent Client Hints🡥](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/how-to-detect-win11) *—Microsoft*