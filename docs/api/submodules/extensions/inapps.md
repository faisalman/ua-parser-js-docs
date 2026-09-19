[`← extensions`](/api/submodules/extensions/overview)

# `InApps`

Extends [`browser`](/info/browser/name) detection to include apps that open websites internally inside a webview.

## List of Detected InApps

- [`Discord`](./inapps/discord.md)
- [`Evernote`](./inapps/evernote.md)
- [`Figma`](./inapps/figma.md)
- [`Flipboard`](./inapps/flipboard.md)
- [`Mattermost`](./inapps/mattermost.md)
- [`Notion`](./inapps/notion.md)
- [`Postman`](./inapps/postman.md)
- [`Rambox`](./inapps/rambox.md)
- [`Rocket.Chat`](./inapps/rocket-chat.md)
- [`Slack`](./inapps/slack.md)
- [`Teams`](./inapps/teams.md)
- [`TikTok Lite`](./inapps/tiktok-lite.md)
- [`VS Code`](./inapps/vs-code.md)
- [`Yahoo! Japan`](./inapps/yahoo-japan.md)
- ... etc.

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Slack/4.38.121').getBrowser());
// {name: "Slack", version: "4.38.121", major: "4", type:"inapp"}
```