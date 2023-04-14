import{_ as s,c as a,o as n,N as e}from"./chunks/framework.921b8ac6.js";const D=JSON.parse('{"title":"getCPU():IData","description":"","frontmatter":{},"headers":[],"relativePath":"api/ua-parser-js/get-cpu.md","lastUpdated":null}'),l={name:"api/ua-parser-js/get-cpu.md"},p=e(`<h1 id="getcpu-idata" tabindex="-1">getCPU():IData <a class="header-anchor" href="#getcpu-idata" aria-label="Permalink to &quot;getCPU():IData&quot;">​</a></h1><p>Get type of CPU architecture from user-agent string.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Result object is structured as follow:</span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">architecture</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="architecture-string" tabindex="-1"><code>architecture:string</code> <a class="header-anchor" href="#architecture-string" aria-label="Permalink to &quot;\`architecture:string\`&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># List of possible values for \`cpu.architecture\`</span></span>
<span class="line"><span style="color:#A6ACCD;">68k, amd64, arm</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">/hf</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">, avr, ia</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">/</span><span style="color:#F78C6C;">64</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">, irix</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">64</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">, </span></span>
<span class="line"><span style="color:#FFCB6B;">mips[64</span><span style="color:#A6ACCD;">], pa-risc, ppc, sparc</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">64</span><span style="color:#89DDFF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Our convention here for 32-bit version of <strong>&#39;x86&#39;</strong> is referred as <code>ia32</code>, while its 64-bit extension (also known as <strong>&#39;x86-64&#39;</strong> or simply <strong>&#39;x64&#39;</strong>) is referred as <code>amd64</code>.</p></div><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> powerpc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC Mac OS; en)</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UAParser</span><span style="color:#A6ACCD;">(powerpc)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCPU</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { architecture : &quot;ppc&quot; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,8),o=[p];function t(r,c,i,d,y,u){return n(),a("div",null,o)}const F=s(l,[["render",t]]);export{D as __pageData,F as default};