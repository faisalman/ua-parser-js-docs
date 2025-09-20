# [Extensions](/api/submodules/extensions/overview) : InApps

Extends [`browser`](/api/main/get-browser) detection to include apps that open websites internally inside a webview.

- `Discord`
- `Evernote`
- `Figma`
- `Flipboard`
- `Mattermost`
- `Notion`
- `Postman`
- `Rambox`
- `Rocket.Chat`
- `Slack`
- `Teams`
- `TikTok Lite`
- `VS Code`
- `Yahoo! Japan`
- ... etc.

## Code Example

```js
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);
```