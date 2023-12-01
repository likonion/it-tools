export default `
<h2>什么是正则表达式 ？</h2>
<blockquote>
<p>正则表达式是一种被用于从文本中检索符合某些特定模式的文本。</p>
</blockquote>
<p>正则表达式是从左到右来匹配一个字符串的。“Regular Expression”这个词太长了，我们通常使用它的缩写“regex”或者“regexp”。
正则表达式可以被用来替换字符串中的文本、验证表单、基于模式匹配从一个字符串中提取字符串等等。
<br /></p>
<p>想象一下，您正在编写应用程序，并且您希望在用户选择用户名时设置规则。我们希望用户名可以包含字母，数字，下划线和连字符。
为了让它看起来不丑，我们还想限制用户名中的字符数量。这时我们可以使用以下正则表达式来验证用户名：</p>
<p align="center">
</p>

<p>上面这个正则表达式可以匹配 <code>john_doe</code>，<code>jo-hn_doe</code> 和 <code>john12_as</code>。但是它不能匹配 <code>Jo</code>，因为该字符串里面包含大写字符，并且它太短了。</p>
<h2>1. 基本匹配</h2>
<p>正则表达式只是我们用于在文本中检索字符串的模式。例如正则表达式 <code>cat</code>，表示：字母 <code>c</code> 后面跟着一个字母 <code>a</code>，再后面跟着一个字母 <code>t</code>。</p>
<pre>
"cat" => The <a href="#learn-regex"><strong>cat</strong></a> sat on the mat
</pre>

<p>正则表达式 <code>123</code> 会匹配字符串“123”。通过将正则表达式中的每个字符逐个与要匹配的字符串中的每个字符进行比较，来完成正则匹配。
正则表达式通常区分大小写，因此正则表达式 <code>Cat</code> 与字符串“cat”不匹配。</p>
<pre>
"Cat" => The cat sat on the <a href="#learn-regex"><strong>Cat</strong></a>
</pre>

<h2>2. 元字符</h2>
<p>元字符是正则表达式的基本组成元素。元字符在这里跟它通常表达的意思不一样，而是以某种特殊的含义去解释。有些元字符在写在方括号内时有特殊含义。
元字符如下：</p>
<table>
<thead>
<tr>
<th align="center">元字符</th>
<th>描述</th>
</tr>
</thead>
<tbody><tr>
<td align="center">.</td>
<td>匹配除换行符以外的任意字符。</td>
</tr>
<tr>
<td align="center">[ ]</td>
<td>字符类，匹配方括号中包含的任意字符。</td>
</tr>
<tr>
<td align="center">[^ ]</td>
<td>否定字符类。匹配方括号中不包含的任意字符</td>
</tr>
<tr>
<td align="center">*</td>
<td>匹配前面的子表达式零次或多次</td>
</tr>
<tr>
<td align="center">+</td>
<td>匹配前面的子表达式一次或多次</td>
</tr>
<tr>
<td align="center">?</td>
<td>匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。</td>
</tr>
<tr>
<td align="center">{n,m}</td>
<td>花括号，匹配前面字符至少 n 次，但是不超过 m 次。</td>
</tr>
<tr>
<td align="center">(xyz)</td>
<td>字符组，按照确切的顺序匹配字符 xyz。</td>
</tr>
<tr>
<td align="center">&#124;</td>
<td>分支结构，匹配符号之前的字符或后面的字符。</td>
</tr>
<tr>
<td align="center">&#92;</td>
<td>转义符，它可以还原元字符原来的含义，允许你匹配保留字符 <code>[ ] ( ) { } . * + ? ^ $ \ &#124;</code></td>
</tr>
<tr>
<td align="center">^</td>
<td>匹配行的开始</td>
</tr>
<tr>
<td align="center">$</td>
<td>匹配行的结束</td>
</tr>
</tbody></table>
<h2>2.1 英文句号</h2>
<p>英文句号 <code>.</code> 是元字符的最简单的例子。元字符 <code>.</code> 可以匹配任意单个字符。它不会匹配换行符和新行的字符。例如正则表达式 <code>.ar</code>，表示：任意字符后面跟着一个字母 <code>a</code>，
再后面跟着一个字母 <code>r</code>。</p>
<pre>
".ar" => The <a href="#learn-regex"><strong>car</strong></a> <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.
</pre>

<h2>2.2 字符集</h2>
<p>字符集也称为字符类。方括号被用于指定字符集。使用字符集内的连字符来指定字符范围。方括号内的字符范围的顺序并不重要。
例如正则表达式 <code>[Tt]he</code>，表示：大写 <code>T</code> 或小写 <code>t</code> ，后跟字母 <code>h</code>，再后跟字母 <code>e</code>。</p>
<pre>
"[Tt]he" => <a href="#learn-regex"><strong>The</strong></a> car parked in <a href="#learn-regex"><strong>the</strong></a> garage.
</pre>

<p>然而，字符集中的英文句号表示它字面的含义。正则表达式 <code>ar[.]</code>，表示小写字母 <code>a</code>，后面跟着一个字母 <code>r</code>，再后面跟着一个英文句号 <code>.</code> 字符。</p>
<pre>
"ar[.]" => A garage is a good place to park a c<a href="#learn-regex"><strong>ar.</strong></a>
</pre>

<h3>2.2.1 否定字符集</h3>
<p>一般来说插入字符 <code>^</code> 表示一个字符串的开始，但是当它在方括号内出现时，它会取消字符集。例如正则表达式 <code>[^c]ar</code>，表示：除了字母 <code>c</code> 以外的任意字符，后面跟着字符 <code>a</code>，
再后面跟着一个字母 <code>r</code>。</p>
<pre>
"[^c]ar" => The car <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.
</pre>

<h2>2.3 重复</h2>
<p>以下元字符 <code>+</code>，<code>*</code> 或 <code>?</code> 用于指定子模式可以出现多少次。这些元字符在不同情况下的作用不同。</p>
<h3>2.3.1 星号</h3>
<p>星号 <code>*</code> 表示匹配上一个匹配规则零次或多次。正则表达式 <code>a*</code> 表示小写字母 <code>a</code> 可以重复零次或者多次。但是它如果出现在字符集或者字符类之后，它表示整个字符集的重复。
例如正则表达式 <code>[a-z]*</code>，表示：一行中可以包含任意数量的小写字母。</p>
<pre>
"[a-z]*" => T<a href="#learn-regex"><strong>he</strong></a> <a href="#learn-regex"><strong>car</strong></a> <a href="#learn-regex"><strong>parked</strong></a> <a href="#learn-regex"><strong>in</strong></a> <a href="#learn-regex"><strong>the</strong></a> <a href="#learn-regex"><strong>garage</strong></a> #21.
</pre>

<p>星号 <code>*</code> 可以与元符号 <code>.</code> 用在一起，用来匹配任意字符串 <code>.*</code>。星号 <code>*</code> 可以与空格符 <code>\s</code> 一起使用，用来匹配一串空格字符。
例如正则表达式 <code>\s*cat\s*</code>，表示：零个或多个空格，后面跟小写字母 <code>c</code>，再后面跟小写字母 <code>a</code>，再在后面跟小写字母 <code>t</code>，后面再跟零个或多个空格。</p>
<pre>
"\s*cat\s*" => The fat<a href="#learn-regex"><strong> cat </strong></a>sat on the <a href="#learn-regex"><strong>cat</strong></a>.
</pre>

<h3>2.3.2 加号</h3>
<p>加号 <code>+</code> 表示匹配上一个字符一次或多次。例如正则表达式 <code>c.+t</code>，表示：一个小写字母 <code>c</code>，后跟任意数量的字符，后跟小写字母 <code>t</code>。</p>
<pre>
"c.+t" => The fat <a href="#learn-regex"><strong>cat sat on the mat</strong></a>.
</pre>

<h3>2.3.3 问号</h3>
<p>在正则表达式中，元字符 <code>?</code> 用来表示前一个字符是可选的。该符号匹配前一个字符零次或一次。
例如正则表达式 <code>[T]?he</code>，表示：可选的大写字母 <code>T</code>，后面跟小写字母 <code>h</code>，后跟小写字母 <code>e</code>。</p>
<pre>
"[T]he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in the garage.
</pre>
<pre>
"[T]?he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in t<a href="#learn-regex"><strong>he</strong></a> garage.
</pre>

<h2>2.4 花括号</h2>
<p>在正则表达式中花括号（也被称为量词？）用于指定字符或一组字符可以重复的次数。例如正则表达式 <code>[0-9]{2,3}</code>，表示：匹配至少 2 位数字但不超过 3 位（0 到 9 范围内的字符）。</p>
<pre>
"[0-9]{2,3}" => The number was 9.<a href="#learn-regex"><strong>999</strong></a>7 but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.
</pre>

<p>我们可以省略第二个数字。例如正则表达式 <code>[0-9]{2,}</code>，表示：匹配 2 个或更多个数字。如果我们也删除逗号，则正则表达式 <code>[0-9]{2}</code>，表示：匹配正好为 2 位数的数字。</p>
<pre>
"[0-9]{2,}" => The number was 9.<a href="#learn-regex"><strong>9997</strong></a> but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.
</pre>

<pre>
"[0-9]{2}" => The number was 9.<a href="#learn-regex"><strong>99</strong></a><a href="#learn-regex"><strong>97</strong></a> but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.
</pre>

<h2>2.5 字符组</h2>
<p>字符组是一组写在圆括号内的子模式 <code>(...)</code>。正如我们在正则表达式中讨论的那样，如果我们把一个量词放在一个字符之后，它会重复前一个字符。
但是，如果我们把量词放在一个字符组之后，它会重复整个字符组。
例如正则表达式 <code>(ab)*</code> 表示匹配零个或多个的字符串“ab”。我们还可以在字符组中使用元字符 <code>|</code>。例如正则表达式 <code>(c|g|p)ar</code>，表示：小写字母 <code>c</code>、<code>g</code> 或 <code>p</code> 后面跟字母 <code>a</code>，后跟字母 <code>r</code>。</p>
<pre>
"(c|g|p)ar" => The <a href="#learn-regex"><strong>car</strong></a> is <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.
</pre>

<h2>2.6 分支结构</h2>
<p>在正则表达式中垂直条 <code>|</code> 用来定义分支结构，分支结构就像多个表达式之间的条件。现在你可能认为这个字符集和分支结构的工作方式一样。
但是字符集和分支结构巨大的区别是字符集只在字符级别上有作用，然而分支结构在表达式级别上依然可以使用。
例如正则表达式 <code>(T|t)he|car</code>，表示：匹配大写字母 <code>T</code> 或小写字母 <code>t</code>，后面跟小写字母 <code>h</code>，后跟小写字母 <code>e</code>，或匹配小写字母 <code>c</code>，后跟小写字母 <code>a</code>，后跟小写字母 <code>r</code>。</p>
<pre>
"(T|t)he|car" => <a href="#learn-regex"><strong>The</strong></a> <a href="#learn-regex"><strong>car</strong></a> is parked in <a href="#learn-regex"><strong>the</strong></a> garage.
</pre>

<h2>2.7 转义特殊字符</h2>
<p>正则表达式中使用反斜杠 <code>\</code> 来转义下一个字符。这将允许你使用保留字符来作为匹配字符 <code>{ } [ ] / \ + * . $ ^ | ?</code>。在特殊字符前面加 <code>\</code>，就可以使用它来做匹配字符。
例如正则表达式 <code>.</code> 是用来匹配除了换行符以外的任意字符。现在要在输入字符串中匹配 <code>.</code> 字符，正则表达式 <code>(f|c|m)at\.?</code>，表示：小写字母 <code>f</code>、<code>c</code> 或者 <code>m</code> 后跟小写字母 <code>a</code>，后跟小写字母 <code>t</code>，后跟可选的 <code>.</code> 字符。</p>
<pre>
"(f|c|m)at\.?" => The <a href="#learn-regex"><strong>fat</strong></a> <a href="#learn-regex"><strong>cat</strong></a> sat on the <a href="#learn-regex"><strong>mat.</strong></a>
</pre>

<h2>2.8 定位符</h2>
<p>在正则表达式中，为了检查匹配符号是否是起始符号或结尾符号，我们使用定位符。
定位符有两种类型：第一种类型是 <code>^</code> 检查匹配字符是否是起始字符，第二种类型是 <code>$</code>，它检查匹配字符是否是输入字符串的最后一个字符。</p>
<h3>2.8.1 插入符号</h3>
<p>插入符号 <code>^</code> 符号用于检查匹配字符是否是输入字符串的第一个字符。如果我们使用正则表达式 <code>^a</code>（如果 a 是起始符号）匹配字符串 <code>abc</code>，它会匹配到 <code>a</code>。
但是如果我们使用正则表达式 <code>^b</code>，它是匹配不到任何东西的，因为在字符串 <code>abc</code> 中“b”不是起始字符。
让我们来看看另一个正则表达式 <code>^(T|t)he</code>，这表示：大写字母 <code>T</code> 或小写字母 <code>t</code> 是输入字符串的起始符号，后面跟着小写字母 <code>h</code>，后跟小写字母 <code>e</code>。</p>
<pre>
"(T|t)he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in <a href="#learn-regex"><strong>the</strong></a> garage.
</pre>

<pre>
"^(T|t)he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in the garage.
</pre>

<h3>2.8.2 美元符号</h3>
<p>美元 <code>$</code> 符号用于检查匹配字符是否是输入字符串的最后一个字符。例如正则表达式 <code>(at\.)$</code>，表示：小写字母 <code>a</code>，后跟小写字母 <code>t</code>，后跟一个 <code>.</code> 字符，且这个匹配器必须是字符串的结尾。</p>
<pre>
"(at\.)" => The fat c<a href="#learn-regex"><strong>at.</strong></a> s<a href="#learn-regex"><strong>at.</strong></a> on the m<a href="#learn-regex"><strong>at.</strong></a>
</pre>

<pre>
"(at\.)$" => The fat cat sat on the m<a href="#learn-regex"><strong>at.</strong></a>
</pre>

<h2>3. 简写字符集</h2>
<p>正则表达式为常用的字符集和常用的正则表达式提供了简写。简写字符集如下：</p>
<table>
<thead>
<tr>
<th align="center">简写</th>
<th>描述</th>
</tr>
</thead>
<tbody><tr>
<td align="center">.</td>
<td>匹配除换行符以外的任意字符</td>
</tr>
<tr>
<td align="center">\w</td>
<td>匹配所有字母和数字的字符：<code>[a-zA-Z0-9_]</code></td>
</tr>
<tr>
<td align="center">\W</td>
<td>匹配非字母和数字的字符：<code>[^\w]</code></td>
</tr>
<tr>
<td align="center">\d</td>
<td>匹配数字：<code>[0-9]</code></td>
</tr>
<tr>
<td align="center">\D</td>
<td>匹配非数字：<code>[^\d]</code></td>
</tr>
<tr>
<td align="center">\s</td>
<td>匹配空格符：<code>[\t\n\f\r\p{Z}]</code></td>
</tr>
<tr>
<td align="center">\S</td>
<td>匹配非空格符：<code>[^\s]</code></td>
</tr>
</tbody></table>
<h2>4. 断言</h2>
<p>后行断言和先行断言有时候被称为断言，它们是特殊类型的 <em><strong>非捕获组</strong></em>（用于匹配模式，但不包括在匹配列表中）。当我们在一种特定模式之前或者之后有这种模式时，会优先使用断言。
例如我们想获取输入字符串 <code>$4.44 and $10.88</code> 中带有前缀 <code>$</code> 的所有数字。我们可以使用这个正则表达式 <code>(?&lt;=\$)[0-9\.]*</code>，表示：获取包含 <code>.</code> 字符且前缀为 <code>$</code> 的所有数字。
以下是正则表达式中使用的断言：</p>
<table>
<thead>
<tr>
<th align="center">符号</th>
<th>描述</th>
</tr>
</thead>
<tbody><tr>
<td align="center">?=</td>
<td>正向先行断言</td>
</tr>
<tr>
<td align="center">?!</td>
<td>负向先行断言</td>
</tr>
<tr>
<td align="center">?&lt;=</td>
<td>正向后行断言</td>
</tr>
<tr>
<td align="center">?&lt;!</td>
<td>负向后行断言</td>
</tr>
</tbody></table>
<h3>4.1 正向先行断言</h3>
<p>正向先行断言认为第一部分的表达式的后面必须是先行断言表达式。返回的匹配结果仅包含与第一部分表达式匹配的文本。
要在一个括号内定义一个正向先行断言，在括号中问号和等号是这样使用的 <code>(?=...)</code>。先行断言表达式写在括号中的等号后面。
例如正则表达式 <code>(T|t)he(?=\sfat)</code>，表示：匹配大写字母 <code>T</code> 或小写字母 <code>t</code>，后面跟字母 <code>h</code>，后跟字母 <code>e</code>。
在括号中，我们定义了正向先行断言，它会引导正则表达式引擎匹配后面跟着 <code>fat</code> 的 <code>The</code> 或 <code>the</code>。</p>
<pre>
"(T|t)he(?=\sfat)" => <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.
</pre>

<h3>4.2 负向先行断言</h3>
<p>当我们需要指定第一部分表达式的后面不跟随某一内容时，使用负向先行断言。负向先行断言的定义跟我们定义的正向先行断言一样，
唯一的区别在于我们使用否定符号 <code>!</code> 而不是等号 <code>=</code>，例如 <code>(?!...)</code>。
我们来看看下面的正则表达式 <code>(T|t)he(?!\sfat)</code>，表示：从输入字符串中获取全部 <code>The</code> 或者 <code>the</code> 且不匹配 <code>fat</code> 前面加上一个空格字符。</p>
<pre>
"(T|t)he(?!\sfat)" => The fat cat sat on <a href="#learn-regex"><strong>the</strong></a> mat.
</pre>

<h3>4.3 正向后行断言</h3>
<p>正向后行断言用于获取跟随在特定模式之后的所有匹配内容。正向后行断言表示为 <code>(?&lt;=...)</code>。例如正则表达式 <code>(?&lt;=(T|t)he\s)(fat|mat)</code>，表示：从输入字符串中获取在单词 <code>The</code> 或 <code>the</code> 之后的所有 <code>fat</code> 和 <code>mat</code> 单词。</p>
<pre>
"(?<=(T|t)he\s)(fat|mat)" => The <a href="#learn-regex"><strong>fat</strong></a> cat sat on the <a href="#learn-regex"><strong>mat</strong></a>.
</pre>

<h3>4.4 负向后行断言</h3>
<p>负向后行断言是用于获取不跟随在特定模式之后的所有匹配的内容。负向后行断言表示为 <code>(?&lt;!...)</code>。例如正则表达式 <code>(?&lt;!(T|t)he\s)(cat)</code>，表示：在输入字符中获取所有不在 <code>The</code> 或 <code>the</code> 之后的所有单词 <code>cat</code>。</p>
<pre>
"(?&lt;!(T|t)he\s)(cat)" => The cat sat on <a href="#learn-regex"><strong>cat</strong></a>.
</pre>

<h2>5. 标记</h2>
<p>标记也称为修饰符，因为它会修改正则表达式的输出。这些标志可以以任意顺序或组合使用，并且是正则表达式的一部分。</p>
<table>
<thead>
<tr>
<th align="center">标记</th>
<th>描述</th>
</tr>
</thead>
<tbody><tr>
<td align="center">i</td>
<td>不区分大小写：将匹配设置为不区分大小写。</td>
</tr>
<tr>
<td align="center">g</td>
<td>全局搜索：搜索整个输入字符串中的所有匹配。</td>
</tr>
<tr>
<td align="center">m</td>
<td>多行匹配：会匹配输入字符串每一行。</td>
</tr>
</tbody></table>
<h3>5.1 不区分大小写</h3>
<p><code>i</code> 修饰符用于执行不区分大小写匹配。例如正则表达式 <code>/The/gi</code>，表示：大写字母 <code>T</code>，后跟小写字母 <code>h</code>，后跟字母 <code>e</code>。
但是在正则匹配结束时 <code>i</code> 标记会告诉正则表达式引擎忽略这种情况。正如你所看到的，我们还使用了 <code>g</code> 标记，因为我们要在整个输入字符串中搜索匹配。</p>
<pre>
"The" => <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.
</pre>

<pre>
"/The/gi" => <a href="#learn-regex"><strong>The</strong></a> fat cat sat on <a href="#learn-regex"><strong>the</strong></a> mat.
</pre>

<h3>5.2 全局搜索</h3>
<p><code>g</code> 修饰符用于执行全局匹配（会查找所有匹配，不会在查找到第一个匹配时就停止）。
例如正则表达式 <code>/.(at)/g</code>，表示：除换行符之外的任意字符，后跟小写字母 <code>a</code>，后跟小写字母 <code>t</code>。
因为我们在正则表达式的末尾使用了 <code>g</code> 标记，它会从整个输入字符串中找到每个匹配项。</p>
<pre>
".(at)" => The <a href="#learn-regex"><strong>fat</strong></a> cat sat on the mat.
</pre>

<pre>
"/.(at)/g" => The <a href="#learn-regex"><strong>fat</strong></a> <a href="#learn-regex"><strong>cat</strong></a> <a href="#learn-regex"><strong>sat</strong></a> on the <a href="#learn-regex"><strong>mat</strong></a>.
</pre>

<h3>5.3 多行匹配</h3>
<p><code>m</code> 修饰符被用来执行多行的匹配。正如我们前面讨论过的 <code>(^, $)</code>，使用定位符来检查匹配字符是输入字符串开始或者结束。但是我们希望每一行都使用定位符，所以我们就使用 <code>m</code> 修饰符。
例如正则表达式 <code>/at(.)?$/gm</code>，表示：小写字母 <code>a</code>，后跟小写字母 <code>t</code>，匹配除了换行符以外任意字符零次或一次。而且因为 <code>m</code> 标记，现在正则表达式引擎匹配字符串中每一行的末尾。</p>
<pre>
"/.at(.)?$/" => The fat
                cat sat
                on the <a href="#learn-regex"><strong>mat.</strong></a>
</pre>

<pre>
"/.at(.)?$/gm" => The <a href="#learn-regex"><strong>fat</strong></a>
                  cat <a href="#learn-regex"><strong>sat</strong></a>
                  on the <a href="#learn-regex"><strong>mat.</strong></a>
</pre>

<h2>常用正则表达式</h2>
<ul>
<li><strong>正整数</strong>：<code>^\d+$</code></li>
<li><strong>负整数</strong>：<code>^-\d+$</code></li>
<li><strong>电话号码</strong>：<code>^+?[\d\s]{3,}$</code></li>
<li><strong>电话代码</strong>：<code>^+?[\d\s]+(?[\d\s]{10,}$</code></li>
<li><strong>整数</strong>：<code>^-?\d+$</code></li>
<li><strong>用户名</strong>：<code>^[\w\d_.]{4,16}$</code></li>
<li><strong>字母数字字符</strong>：<code>^[a-zA-Z0-9]*$</code></li>
<li><strong>带空格的字母数字字符</strong>：<code>^[a-zA-Z0-9 ]*$</code></li>
<li><strong>密码</strong>：<code>^(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*$</code></li>
<li><strong>电子邮件</strong>：<code>^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$</code></li>
<li><strong>IPv4 地址</strong>：<code>^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$</code></li>
<li><strong>小写字母</strong>：<code>^([a-z])*$</code></li>
<li><strong>大写字母</strong>：<code>^([A-Z])*$</code></li>
<li><strong>网址</strong>：<code>^(((http|https|ftp):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&amp;_\.~?\-]*))*$</code></li>
<li><strong>VISA 信用卡号码</strong>：<code>^(4[0-9]{12}(?:[0-9]{3})?)*$</code></li>
<li><strong>日期（MM/DD/YYYY）</strong>：<code>^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$</code></li>
<li><strong>日期（YYYY/MM/DD）</strong>：<code>^(19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])$</code></li>
<li><strong>万事达信用卡号码</strong>：<code>^(5[1-5][0-9]{14})*$</code></li>
</ul>
`