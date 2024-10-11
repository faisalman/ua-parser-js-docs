import{_ as s,c as n,o as a,N as l}from"./chunks/framework.2ea5d489.js";const u=JSON.parse('{"title":"Using Command Line","description":"","frontmatter":{},"headers":[],"relativePath":"intro/quick-start/using-cli.md","lastUpdated":1718207119000}'),p={name:"intro/quick-start/using-cli.md"},o=l(`<h1 id="using-command-line" tabindex="-1">Using Command Line <a class="header-anchor" href="#using-command-line" aria-label="Permalink to &quot;Using Command Line&quot;">​</a></h1><p>You can use <a href="https://docs.npmjs.com/cli/v10/commands/npx" target="_blank" rel="noreferrer"><code>npx</code>↗</a> to run UAParser.js from the command line without installing the package:</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ua-parser-js</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;INSERT-USER-AGENT-HERE&gt;</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="code-example" tabindex="-1">Code Example <a class="header-anchor" href="#code-example" aria-label="Permalink to &quot;Code Example&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># example command input:</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ua-parser-js</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Flock/2.16 (Zenwalk 7.3; es_PR;)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># console output:</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">    {</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ua</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">Flock/</span><span style="color:#F78C6C;">2.16</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Zenwalk</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7.3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">es_PR</span><span style="color:#89DDFF;">;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">browser</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: {</span></span>
<span class="line"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">Flock</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">2.16</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">major</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">        },</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">cpu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: {},</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">device</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: {},</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">engine</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: {},</span></span>
<span class="line"><span style="color:#C3E88D;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">os</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: {</span></span>
<span class="line"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">Zenwalk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">7.3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span></span>
<span class="line"><span style="color:#C3E88D;">]</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># let&#39;s save the result into a log file:</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ua-parser-js</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Flock/2.16 (Zenwalk 7.3; es_PR;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,5),e=[o];function t(r,c,D,i,y,C){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};