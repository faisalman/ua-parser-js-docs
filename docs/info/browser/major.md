# `browser.major`

Major version number of the browser (following [semver↗](https://semver.org/)), derived from the first number in [`browser.version`](/info/browser/version).

- If the first token in `browser.version` is a number, then `major` is the first number (e.g `5.1.21214` would be `5`)
- If the first token in `browser.version` is not a number, then `major` is `""` (an empty string)
- If the browser has no `browser.version`, then `major` is `undefined`