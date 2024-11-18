import{_ as e,c as s,o as a,N as o}from"./chunks/framework.2ea5d489.js";const y=JSON.parse('{"title":"getBrowser(): IBrowser","description":"","frontmatter":{},"headers":[],"relativePath":"api/main/get-browser.md","lastUpdated":1731893778000}'),r={name:"api/main/get-browser.md"},n=o('<h1 id="getbrowser-ibrowser" tabindex="-1"><code>getBrowser(): IBrowser</code> <a class="header-anchor" href="#getbrowser-ibrowser" aria-label="Permalink to &quot;`getBrowser(): IBrowser`&quot;">​</a></h1><p>Get browser name, full version, &amp; major version from user-agent string.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Result object is structured as follow:</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">major</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="properties-of-ibrowser" tabindex="-1">Properties of <code>IBrowser</code>: <a class="header-anchor" href="#properties-of-ibrowser" aria-label="Permalink to &quot;Properties of `IBrowser`:&quot;">​</a></h2><h3 id="name-string" tabindex="-1"><code>name?: string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;`name?: string`&quot;">​</a></h3><p>Name of current browser</p><ul><li><a href="/info/browser/name.html">List of possible <code>browser.name</code></a></li></ul><h3 id="version-string" tabindex="-1"><code>version?: string</code> <a class="header-anchor" href="#version-string" aria-label="Permalink to &quot;`version?: string`&quot;">​</a></h3><p>Version of current browser, determined dynamically from user-agent data.</p><ul><li><code>undefined</code> if browser version is not found.</li></ul><h3 id="major-string" tabindex="-1"><code>major?: string</code> <a class="header-anchor" href="#major-string" aria-label="Permalink to &quot;`major?: string`&quot;">​</a></h3><p>Major number derived from the first number in <code>version</code>, following <a href="https://semver.org/" target="_blank" rel="noreferrer">semver↗</a>, e.g: if <code>version</code> is <code>5.1.21214</code>, then <code>major</code> would be <code>5</code>.</p><ul><li><code>undefined</code> if the browser has no <code>version</code></li><li><code>&quot;&quot;</code> if the first token in <code>version</code> is not a Number</li></ul><h3 id="type-string" tabindex="-1"><code>type?: string</code> <a class="header-anchor" href="#type-string" aria-label="Permalink to &quot;`type?: string`&quot;">​</a></h3><p>Type of current browser, e.g: <code>email</code>, <code>inapp</code>, <code>crawler</code>.</p><ul><li><a href="/info/browser/type.html">List of possible <code>browser.type</code></a></li><li><a href="/api/submodules/extensions/overview.html"><code>ua-parser-js/extensions</code> submodule</a></li></ul><h2 id="methods-inherited-from-idata" tabindex="-1">Methods inherited from <code>IData</code>: <a class="header-anchor" href="#methods-inherited-from-idata" aria-label="Permalink to &quot;Methods inherited from `IData`:&quot;">​</a></h2><ul><li><a href="/api/main/idata/is.html"><code>is(value: string): boolean</code></a></li><li><a href="/api/main/idata/to-string.html"><code>toString(): string</code></a></li><li><a href="/api/main/idata/with-client-hints.html"><code>withClientHints&lt;IBrowser&gt;(): PromiseLike&lt;IBrowser&gt; | IBrowser</code></a></li><li><a href="/api/main/idata/with-feature-check.html"><code>withFeatureCheck&lt;IBrowser&gt;(): PromiseLike&lt;IBrowser&gt; | IBrowser</code></a></li></ul><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> operamini </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(operamini)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBrowser</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// { name : &quot;Opera Mini&quot;, version : &quot;5.1.21214&quot;, major : &quot;5&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',20),l=[n];function t(i,p,c,d,m,h){return a(),s("div",null,l)}const F=e(r,[["render",t]]);export{y as __pageData,F as default};
