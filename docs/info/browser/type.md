# List of Detected Browser Types

::: tip
Use the [`BrowserType`](/api/submodules/enums/browser-type) enum from the `enums` submodule to reference browser types in code.
:::

| Value | Description | Examples |
|-|-|-|
| [`cli`](./type/cli.md) | Text-based web browsers operated through the command line, used for browsing websites without a graphical interface. |`cURL`, `Lynx` |
| [`crawler`](./type/crawler.md)  | Automated programs (bots) that systematically browse the web to index websites for search engines. | `Googlebot` |
| [`email`](./type/email.md) | Software used to access and manage a user's email. | `Microsoft Outlook`, `Thunderbird` |
| [`fetcher`](./type/fetcher.md) | Automated programs (bots) that retrieve specific URLs on-demand to extract metadata or generate previews. | `Twitterbot`, `ChatGPT-User`  |
| [`inapp`](./type/inapp.md) | WebView/embedded browsers within apps to open web content without leaving the app, typically with minimal controls. | `Slack` |
| [`mediaplayer`](./type/mediaplayer.md)  | Applications that access web content specifically for playing media files. | `VLC`, `Windows Media Player` |
| [`library`](./type/library.md) | Software components or libraries used within larger applications to fetch or interact with web content. | `Axios`, `Scrapy` |