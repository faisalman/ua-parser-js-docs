<sup>*[`Extensions Submodule`](./overview.md) > `InApps`*</sup>

# `InApps`

Extends [`browser`](/info/browser/name) detection to include apps that open websites internally inside a webview.

## List of Detected InApps

| **In-App** |  |  |
| --- | --- | --- |
| [`Discord`](./inapps/discord.md) | [`Microsoft Teams`](./inapps/teams.md) | [`Slack`](./inapps/slack.md) |
| [`Evernote`](./inapps/evernote.md) | [`Notion`](./inapps/notion.md) | [`TikTok Lite`](./inapps/tiktok-lite.md) |
| [`Figma`](./inapps/figma.md) | [`Postman`](./inapps/postman.md) | [`VS Code`](./inapps/vs-code.md) |
| [`Flipboard`](./inapps/flipboard.md) | [`Rambox`](./inapps/rambox.md) | [`Yahoo! Japan`](./inapps/yahoo-japan.md) |
| [`Mattermost`](./inapps/mattermost.md) | [`Rocket.Chat`](./inapps/rocket-chat.md) |  |

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps }   from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Slack/4.38.121').getBrowser());
// {name: "Slack", version: "4.38.121", major: "4", type:"inapp"}
```