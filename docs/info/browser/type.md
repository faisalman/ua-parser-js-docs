# List of Detected Browser Types

| Value | Description | Examples |
|-|-|-|
| [`cli`](./type/cli.md) | Command-line web browsers. | `cURL`, `Lynx` |
| [`crawler`](./type/crawler.md)  | Bots that index websites. | `Googlebot` |
| [`email`](./type/email.md) | Email client software. | `Microsoft Outlook`, `Thunderbird` |
| [`fetcher`](./type/fetcher.md) | Bots that fetch URLs on-demand for previews or metadata. | `Twitterbot`, `ChatGPT-User`  |
| [`inapp`](./type/inapp.md) | In-app webviews for browsing without leaving the app. | `Slack` |
| [`mediaplayer`](./type/mediaplayer.md)  | Apps that access web content to play media. | `VLC`, `Windows Media Player` |
| [`library`](./type/library.md) | Libraries used to fetch or interact with web content. | `Axios`, `Scrapy` |

::: tip
Use the [`BrowserType`](/api/submodules/enums/browser-type) enum from the `enums` submodule to reference browser types in code.
:::