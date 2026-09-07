[`← Browser Name`](../name.md)

# Chrome Headless

Chrome Headless runs Google Chrome without a visible user interface for automation and testing.

::: tip
UAParser.js distinguishes Chrome by how and where it runs:

- [`Chrome`](./chrome.md) for the desktop browser.
- [`Mobile Chrome`](./mobile-chrome.md) for the standalone Android and iOS browser.
- [`Chrome WebView`](./chrome-webview.md) for web content embedded in Android apps.
- [`Chrome Headless`](./chrome-headless.md) for Chrome running without a graphical interface, commonly during automation.
- [`Chromium`](./chromium.md) for the open-source browser project on which Chrome is based.
:::

## User-Agent Examples

### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/60.0.3112.113 Safari/537.36
```

### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome Safari/537.36
```


## References

- [Chrome Headless🡥](https://developer.chrome.com/docs/automation-and-testing/headless)
