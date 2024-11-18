import{_ as e,c as a,o as n,N as s}from"./chunks/framework.2ea5d489.js";const u=JSON.parse('{"title":"getEngine(): IEngine","description":"","frontmatter":{},"headers":[],"relativePath":"api/main/get-engine.md","lastUpdated":1731893778000}'),o={name:"api/main/get-engine.md"},l=s('<h1 id="getengine-iengine" tabindex="-1"><code>getEngine(): IEngine</code> <a class="header-anchor" href="#getengine-iengine" aria-label="Permalink to &quot;`getEngine(): IEngine`&quot;">​</a></h1><p>Get layout rendering engine name &amp; version from user-agent string.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Result object is structured as follow:</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="properties-of-iengine" tabindex="-1">Properties of <code>IEngine</code>: <a class="header-anchor" href="#properties-of-iengine" aria-label="Permalink to &quot;Properties of `IEngine`:&quot;">​</a></h2><h3 id="name-string" tabindex="-1"><code>name?: string</code> <a class="header-anchor" href="#name-string" aria-label="Permalink to &quot;`name?: string`&quot;">​</a></h3><ul><li><a href="/info/engine/name.html">List of possible <code>engine.name</code></a></li></ul><h3 id="version-string" tabindex="-1"><code>version?: string</code> <a class="header-anchor" href="#version-string" aria-label="Permalink to &quot;`version?: string`&quot;">​</a></h3><p>Determined dynamically</p><h2 id="methods-inherited-from-idata" tabindex="-1">Methods inherited from <code>IData</code>: <a class="header-anchor" href="#methods-inherited-from-idata" aria-label="Permalink to &quot;Methods inherited from `IData`:&quot;">​</a></h2><ul><li><a href="/api/main/idata/is.html"><code>is(value: string): boolean</code></a></li><li><a href="/api/main/idata/to-string.html"><code>toString(): string</code></a></li><li><a href="/api/main/idata/with-client-hints.html"><code>withClientHints&lt;IEngine&gt;(): PromiseLike&lt;IEngine&gt; | IEngine</code></a></li><li><a href="/api/main/idata/with-feature-check.html"><code>withFeatureCheck&lt;IEngine&gt;(): PromiseLike&lt;IEngine&gt; | IEngine</code></a></li></ul><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> operamini </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(operamini)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getEngine</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// { name : &quot;Presto&quot;, version : &quot;2.5.25&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',12),t=[l];function i(r,p,c,d,m,h){return n(),a("div",null,t)}const y=e(o,[["render",i]]);export{u as __pageData,y as default};
