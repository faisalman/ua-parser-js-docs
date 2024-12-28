import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.Cv6Grnpd.js";const d=JSON.parse('{"title":"How to Detect macOS > 10.15.7","description":"","frontmatter":{},"headers":[],"relativePath":"guides/how-to-detect-macos-10157-using-javascript.md","filePath":"guides/how-to-detect-macos-10157-using-javascript.md","lastUpdated":1734097810000}'),n={name:"guides/how-to-detect-macos-10157-using-javascript.md"};function l(r,s,p,h,o,c){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="how-to-detect-macos-10-15-7" tabindex="-1">How to Detect macOS &gt; 10.15.7 <a class="header-anchor" href="#how-to-detect-macos-10-15-7" aria-label="Permalink to &quot;How to Detect macOS &gt; 10.15.7&quot;">​</a></h1><p>It&#39;s currently impossible to detect <code>macOS &gt; &#39;10.15&#39;</code> only from user-agent data. This issue is primarily caused by macOS version being capped at <code>10.15</code> on all major browsers:</p><ul><li><p><a href="https://bugs.webkit.org/show_bug.cgi?id=216593" target="_blank" rel="noreferrer">macOS Limit reported macOS release to 10.15 series🡭</a> <em>—Apple</em></p></li><li><p><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1679929" target="_blank" rel="noreferrer">Cap the User-Agent string&#39;s reported macOS version at 10.15🡭</a> <em>—Mozilla</em></p></li><li><p><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1175225" target="_blank" rel="noreferrer">Cap the reported macOS version in the user-agent string at 10_15_7🡭</a> <em>—Google</em></p></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Since rolling out its <a href="https://www.chromium.org/updates/ua-reduction/#token-reference" target="_blank" rel="noreferrer">user-agent reduction</a> program, Chrome user-agent in macOS will always identify itself as <code>Macintosh; Intel Mac OS X 10_15_7</code> for all of these macOS versions:</p><ul><li>macOS 10.15 (Catalina)</li><li>macOS 11 (Big Sur)</li><li>macOS 12 (Monterey)</li><li>macOS 13 (Ventura)</li><li>macOS 14 (Sonoma)</li><li>macOS 15 (Sequoia)</li></ul></div><hr><p>Luckily, there is a kind of workaround by utilizing client hints feature:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> uap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UAParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getOS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Based on user agent: &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, os); </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { name: &quot;macOS&quot;, version: &quot;10.15.7&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getOS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withClientHints</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">os</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Based on client hints&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, os); </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // { name: &quot;macOS&quot;, version: &quot;11&quot; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>See more: <a href="/api/main/idata/with-client-hints.html"><code>withClientHints()</code></a></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Client hints feature is only supported in Chromium-based browsers (Chrome, Edge, etc.). In other browsers like Firefox and Safari, <code>withClientHints()</code> gives no effect to the result and still detected as macOS 10.15.7.</p></div>`,9)]))}const g=i(n,[["render",l]]);export{d as __pageData,g as default};