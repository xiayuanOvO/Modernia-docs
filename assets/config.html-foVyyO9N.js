import{_ as e,r as t,o as p,c as o,b as s,d as n,e as l,w as c,a as i}from"./app-iiPrTsqR.js";const u={},r=s("h1",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),d=s("code",null,"Modernia",-1),k=i(`<h2 id="配置信息" tabindex="-1"><a class="header-anchor" href="#配置信息" aria-hidden="true">#</a> 配置信息</h2><p>文件位置：<code>./config/config.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">robot</span><span class="token punctuation">:</span> <span class="token comment"># QQ开发平台申请的机器人信息</span>
  <span class="token key atrule">appid</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token key atrule">secret</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token key atrule">token</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="娱乐配置" tabindex="-1"><a class="header-anchor" href="#娱乐配置" aria-hidden="true">#</a> 娱乐配置</h2><p>文件位置： <code>./config/game.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 每天60读懂世界缓存</span>
<span class="token comment"># 此功能不用配置，会自动进行配置</span>
<span class="token key atrule">daily_news</span><span class="token punctuation">:</span> 
  <span class="token key atrule">date_times</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment"># 上次获取日期时间戳</span>
  <span class="token key atrule">image_path</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span> <span class="token comment"># 缓存文件路径</span>
<span class="token comment"># /菜单 回复内容</span>
<span class="token key atrule">menu</span><span class="token punctuation">:</span>
  <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token string">&#39;{at_author} 欢迎体验Modernia：\\n        /签到    签到打开，获得金币\\n        /查询    查询自身信息&#39;</span>
<span class="token comment"># /查询 回复内容</span>
<span class="token key atrule">select</span><span class="token punctuation">:</span>
  <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token string">&#39;{at_author}\\n金币: {author_gold}&#39;</span>
<span class="token comment"># /签到 获得金币随机值的取值范围</span>
<span class="token key atrule">sign</span><span class="token punctuation">:</span>
  <span class="token key atrule">gold_max</span><span class="token punctuation">:</span> <span class="token number">10</span>
  <span class="token key atrule">gold_min</span><span class="token punctuation">:</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽卡配置" tabindex="-1"><a class="header-anchor" href="#抽卡配置" aria-hidden="true">#</a> 抽卡配置</h2><p>抽卡配置文件包含多个文件。</p><h3 id="抽卡数据配置" tabindex="-1"><a class="header-anchor" href="#抽卡数据配置" aria-hidden="true">#</a> 抽卡数据配置</h3><p>文件位置： <code>./data/excel/gacha_table.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;gachaPoolClient&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;gachaPoolId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NORM_0_1_1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gachaIndex&quot;</span><span class="token operator">:</span> <span class="token number">112</span><span class="token punctuation">,</span>
      <span class="token property">&quot;openTime&quot;</span><span class="token operator">:</span> <span class="token number">1548727200</span><span class="token punctuation">,</span>
      <span class="token property">&quot;endTime&quot;</span><span class="token operator">:</span> <span class="token number">1557950399</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gachaPoolName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;适合多种场合的强力干员&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gachaPoolSummary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;结束于5月16日 03:59&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gachaPoolDetail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{@ga.title}【强力干员】干员列表&lt;/&gt;\\n\\n&lt;@ga.up&gt;※出现率上升※&lt;/&gt;\\n★★★★★★\\\\n能天使 / 安洁莉娜 （占6★出率的50%） \\n★★★★★\\\\n天火 / 凛冬 / 可颂 （占5★出率的50%）\\n\\n&lt;@ga.subtitle&gt;※全部可能出现的干员※&lt;/&gt;\\n★★★★★★(2%)\\\\n能天使 / 推进之王 / 伊芙利特 / 艾雅法拉 / 安洁莉娜 / 闪灵 / 夜莺 / 星熊 / 塞雷娅 / 银灰\\n--------------------\\n★★★★★(8%)\\\\n白面鸮 / 凛冬 / 德克萨斯 / 芙兰卡 / 拉普兰德 / 幽灵鲨 / 蓝毒 / 白金 / 陨星 / 天火 / 梅尔 / 赫默 / 华法琳 / 临光 / 红 / 雷蛇 / 可颂 / 普罗旺斯 / 守林人 / 崖心 / 初雪 / 真理 / 空 / 狮蝎 / 食铁兽\\n--------------------\\n★★★★(50%)\\\\n夜烟 / 远山 / 杰西卡 / 流星 / 白雪 / 清道夫 / 红豆 / 杜宾 / 缠丸 / 霜叶 / 慕斯 / 砾 / 暗索 / 末药 / 调香师 / 角峰 / 蛇屠箱 / 古米 / 深海色 / 地灵 / 阿消\\n--------------------\\n★★★(40%)\\\\n芬 / 香草 / 翎羽 / 玫兰莎 / 卡缇 / 米格鲁 / 克洛丝 / 炎熔 / 芙蓉 / 安赛尔 / 史都华德 / 梓兰\\n\\n该寻访为【标准寻访】\\n\\n在所有【标准寻访】中，如果连续50次没有获得6星干员，则下一次获得6星干员的概率将从原本的2%提升至4%。如果该次还没有寻访到6星干员，则下一次寻访获得6星的概率由4%提升到6%。依此类推，每次提高2%获得6星干员的概率，直至达到100%时必定获得6星干员。\\n在任何一个【标准寻访】中，没有获得6星干员时，都会累积次数，该次数不会因为【标准寻访】的结束而清零。因为累积次数而增加的获得概率，也会应用于接下来任意一次【标准寻访】。\\n【注意】任何时候在任意一个【标准寻访】中获得6星干员，后续在【标准寻访】中获得6星干员的概率将恢复到2%。\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;guarantee5Avail&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;guarantee5Count&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;CDPrimColor&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;CDSecColor&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;LMTGSID&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gachaRuleType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NORMAL&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="玩家数据" tabindex="-1"><a class="header-anchor" href="#玩家数据" aria-hidden="true">#</a> 玩家数据</h2><p>文件位置：<code>./data/user/all/{user_id}.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;gold&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;signTimes&quot;</span><span class="token operator">:</span> <span class="token number">1704384000</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gacha&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;normal&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token property">&quot;NORM_23_0_2&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;cnt&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rarity&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;maxCnt&quot;</span><span class="token operator">:</span><span class="token number">10</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(m,b){const a=t("RouterLink");return p(),o("div",null,[r,s("p",null,[d,n(" 包含多个配置文件，详细请查看 "),l(a,{to:"/guide/file.html"},{default:c(()=>[n("目录结构")]),_:1}),n(" 。")]),k])}const h=e(u,[["render",v],["__file","config.html.vue"]]);export{h as default};
