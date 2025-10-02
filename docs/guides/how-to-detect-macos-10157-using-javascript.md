# How to Detect macOS > 10.15.7

It's currently impossible to detect `macOS > '10.15'` only from user-agent data. This issue is primarily caused by macOS version being capped at `10.15` on all major browsers:

- [macOS Limit reported macOS release to 10.15 series🡭](https://bugs.webkit.org/show_bug.cgi?id=216593) *—Apple*

- [Cap the User-Agent string's reported macOS version at 10.15🡭](https://bugzilla.mozilla.org/show_bug.cgi?id=1679929) *—Mozilla*

- [Cap the reported macOS version in the user-agent string at 10_15_7🡭](https://bugs.chromium.org/p/chromium/issues/detail?id=1175225) *—Google*

::: info 
Since rolling out its [user-agent reduction](https://www.chromium.org/updates/ua-reduction/#token-reference) program, Chrome user-agent in macOS will always identify itself as `Macintosh; Intel Mac OS X 10_15_7` for all of these macOS versions:

- macOS 10.15 (Catalina)
- macOS 11 (Big Sur)
- macOS 12 (Monterey)
- macOS 13 (Ventura)
- macOS 14 (Sonoma)
- macOS 15 (Sequoia)
- macOS 26 (Tahoe)
:::

---

Luckily, there is a kind of workaround by utilizing client hints feature:

```js
const uap = new UAParser();

let os = uap.getOS();
console.log('Based on user agent: ', os); 
// { name: "macOS", version: "10.15.7" }

uap.getOS().withClientHints().then(os => {
    console.log('Based on client hints', os); 
    // { name: "macOS", version: "11" }
});
```

See more: [`withClientHints()`](/api/main/idata/with-client-hints)

::: warning
Client hints feature is only supported in Chromium-based browsers (Chrome, Edge, etc.). In other browsers like Firefox and Safari, `withClientHints()` gives no effect to the result and still detected as macOS 10.15.7.
:::