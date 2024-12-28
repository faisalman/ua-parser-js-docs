import{_ as i,c as e,a2 as a,o as l}from"./chunks/framework.Cv6Grnpd.js";const k=JSON.parse('{"title":"Fetchers","description":"","frontmatter":{},"headers":[],"relativePath":"api/submodules/extensions/fetchers.md","filePath":"api/submodules/extensions/fetchers.md","lastUpdated":1731770452000}'),n={name:"api/submodules/extensions/fetchers.md"};function t(o,s,d,r,c,p){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="fetchers" tabindex="-1">Fetchers <a class="header-anchor" href="#fetchers" aria-label="Permalink to &quot;Fetchers&quot;">​</a></h1><p>Bots that retrieve content from <u><strong>specific</strong></u> URLs <u><strong>on demand</strong></u></p><ul><li><code>AhrefsSiteAudit</code></li><li><code>BingPreview</code></li><li><code>ChatGPT-User</code></li><li><code>cohere-ai</code></li><li><code>Discordbot</code></li><li><code>DuckAssistBot</code></li><li><code>FeedFetcher-Google</code></li><li><code>Google-Read-Aloud</code></li><li><code>LinkedInBot</code></li><li><code>Mastodon</code></li><li><code>Pinterestbot</code></li><li><code>Redditbot</code></li><li><code>Rogerbot</code></li><li><code>Slackbot</code></li><li><code>Slack-ImgProxy</code></li><li><code>Slack-LinkExpanding</code></li><li><code>Snapchat</code></li><li><code>Telegrambot</code></li><li><code>Twitterbot</code></li><li><code>Uptimerobot</code></li><li><code>Vercelbot</code></li><li><code>WhatsApp</code></li><li><code>YaDirectFetcher</code></li><li><code>YandexCalendar</code></li><li><code>YandexDirect</code></li><li><code>YandexDirectDyn</code></li><li><code>YandexSearchShop</code></li><li><code>YandexSitelinks</code></li><li><code>YandexUserProxy</code></li><li>... etc.</li></ul><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Fetchers } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ua-parser-js/extensions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bingprev</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`KHTML\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> like Gecko) BingPreview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.0b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fetcherParser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UAParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Fetchers);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fetcherParser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bingprev).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBrowser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {name: &quot;BingPreview&quot;, version: &quot;1.0&quot;, major: &quot;1.0b&#39;&quot;, type: &quot;fetcher&quot;});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,5)]))}const g=i(n,[["render",t]]);export{k as __pageData,g as default};