# InApps

Apps that open websites internally without switching to another dedicated browser app.

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