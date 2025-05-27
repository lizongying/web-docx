import fs from 'fs';
import HtmlToDocx from 'web-docx';

const filePath = './example.docx';
import { minify } from 'html-minifier-terser';

// const htmlString = `<!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <title>Document</title>
//     </head>
//     <body>
//         <div>
//             <p>Taken from wikipedia</p>
//             <img
//                 src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
//                 alt="Red dot"
//             />
//
//         </div>
//         <div>
//             <h1>This is heading 1</h1>
//             <p>Content</p>
//             <h2>This is heading 2</h2>
//             <p>Content</p>
//             <h3>This is heading 3</h3>
//             <p>Content</p>
//             <h4>This is heading 4</h4>
//             <p>Content</p>
//             <h5>This is heading 5</h5>
//             <p>Content</p>
//             <h6>This is heading 6</h6>
//             <p>Content</p>
//         </div>
//         <p>
//             <strong>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
//                 a type specimen book.
//             </strong>
//             <i>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</i>
//             <u>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</u>and more recently with desktop publishing software
//             <span style="color: hsl(0, 75%, 60%);"> like Aldus PageMaker </span>including versions of Lorem Ipsum.
//             <span style="background-color: hsl(0, 75%, 60%);">Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
//             It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
//         </p>
//         <p style="font-family: 'Courier New', Courier, monospace;">Look at me, i'm a paragraph in Courier New!</p>
//         <p style="font-family: SerifTestFont, serif;">Look at me, i'm a paragraph in SerifTestFont!</p>
//         <p style="font-family: SansTestFont, sans-serif;">Look at me, i'm a paragraph in SansTestFont!</p>
//         <p style="font-family: MonoTestFont, monospace;">Look at me, i'm a paragraph in MonoTestFont!</p>
//         <blockquote>
//             For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
//         </blockquote>
//         <p>
//             <strong>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
//                 a type specimen book.
//             </strong>
//         </p>
//         <p style="margin-left: 40px;">
//             <strong>Left indented paragraph:</strong>
//             <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
//         </p>
//         <p style="margin-right: 40px;">
//             <strong>Right indented paragraph:</strong>
//             <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
//         </p>
//         <p style="margin-left: 40px; margin-right: 40px;">
//             <strong>Left and right indented paragraph:</strong>
//             <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
//         </p>
//         <ul style="list-style-type: circle;">
//             <li>Unordered list element</li>
//         </ul>
//         <br>
//         <ol style="list-style-type: decimal;">
//             <li>Ordered list element</li>
//         </ol>
//         <div class="page-break" style="page-break-after: always"></div>
//         <ul>
//             <li><span style="font-size:10pt"><span style="color:##e28743">I am a teacup <strong><span style="color:#595959">A strong teacup</span></strong></span></span></li>
//             <li><span style="font-size:10pt"><span style="color:#4d4f53">I am another teacup <strong><span style="color:#2596be">A blue</span></strong> Teacup</span></span></li>
//             <li><span style="font-size:10pt"><span style="color:#cc1177">Stonks only go up if you turn the chart sometimes</span></span></li>
//         </ul>
//         <div class="page-break" style="page-break-after: always"></div>
//         <ul>
//             <li>
//                 <a href="https://en.wikipedia.org/wiki/Coffee">
//                     <strong>
//                         <u>Coffee</u>
//                     </strong>
//                 </a>
//             </li>
//             <li>Tea
//                 <ol>
//                     <li>Black tea
//                         <ol style="list-style-type:lower-alpha-bracket-end;" data-start="2">
//                             <li>Srilankan <strong>Tea</strong>
//                                 <ul>
//                                     <li>Uva <b>Tea</b></li>
//                                 </ul>
//                             </li>
//                             <li>Assam Tea</li>
//                         </ol>
//                     </li>
//                     <li>Green tea</li>
//                 </ol>
//             </li>
//             <li>Milk
//                 <ol>
//                     <li>Cow Milk</li>
//                     <li>Soy Milk</li>
//                 </ol>
//             </li>
//         </ul>
//         <br>
//         <table>
//             <tr>
//                 <th>Country</th>
//                 <th>Capital</th>
//             </tr>
//             <tr>
//                 <td>India</td>
//                 <td>New Delhi</td>
//             </tr>
//             <tr>
//                 <td>United States of America</td>
//                 <td>Washington DC</td>
//             </tr>
//             <tr>
//                 <td>Bolivia</td>
//                 <td>
//                     <ol>
//                         <li>Sucre</li>
//                         <li>La Paz</li>
//                     </ol>
//                 </td>
//             </tr>
//         </table>
//
//         <div class="page-break" style="page-break-after: always"></div>
//         <table align="center" class="Table">
//           <tbody>
//             <tr>
//               <td colspan="2" rowspan="2" style="border-bottom:none; width:249px; padding:5px 11px 5px 11px; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt">&nbsp;</span></span></span></p>
//               </td>
//               <td colspan="3" style="border-bottom:1px solid black; width:374px; padding:5px 11px 5px 11px; background-color:gray; border-top:1px solid black; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">Example Header</span></span></span></span></p>
//               </td>
//             </tr>
//             <tr>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Financial</span></span></b></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Tech</span></span></b></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Total Market</span></span></b></span></span></span></p>
//               </td>
//             </tr>
//             <tr>
//               <td rowspan="3" style="border-bottom:none; width:125px; padding:5px 11px 5px 11px; background-color:gray; border-top:none; border-right:1px solid black; border-left:1px solid black" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Level of Meme</span></span></b></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">High</span></span></b></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:red; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">GUSH</span></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#ffc000; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">ARKK</span></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:yellow; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">SPLX</span></span></span></span></p>
//               </td>
//             </tr>
//             <tr>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Medium</span></span></b></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#ffc000; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">[̲̅$̲̅(̲̅ ͡&deg; ͜ʖ ͡&deg;̲̅)̲̅$̲̅]</span></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:yellow; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">TQQQ</span></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#92d050; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">( ͡~ ͜ʖ ͡&deg;)</span></span></span></span></p>
//               </td>
//             </tr>
//             <tr>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#d9d9d9; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><b><span style="font-size:10.0pt"><span style="color:black">Low</span></span></b></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:yellow; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">( ◔ ʖ̯ ◔ )</span></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#92d050; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">QQQ</span></span></span></span></p>
//               </td>
//               <td style="border-bottom:1px solid black; width:125px; padding:5px 11px 5px 11px; background-color:#00b050; border-top:none; border-right:1px solid black; border-left:none" valign="top">
//               <p style="margin-bottom:8px"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:11pt"><span style="line-height:12pt"><span style="color:black">SPY</span></span></span></span></p>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//     </body>
// </html>`;

let htmlString = `
<p>不同图片格式在浏览器中的兼容性有所不同，以下是主流图片格式的浏览器支持情况总结（截至最新版本）：</p>
<hr>
<h3><strong>1. 传统格式</strong></h3>
<table style="width: 100%">
<thead>
<tr>
<th>格式</th>
<th>描述</th>
<th>兼容性</th>
</tr>
</thead>
<tbody><tr>
<td><strong>JPEG</strong></td>
<td>有损压缩，适合照片</td>
<td><strong>全平台支持</strong>（包括旧版浏览器）。</td>
</tr>
<tr>
<td><strong>PNG</strong></td>
<td>无损压缩，支持透明度</td>
<td><strong>全平台支持</strong>（包括旧版浏览器）。PNG-8 和 PNG-24 均兼容。</td>
</tr>
<tr>
<td><strong>GIF</strong></td>
<td>支持动画和简单透明度</td>
<td><strong>全平台支持</strong>，但颜色限制（256色），适合动图。</td>
</tr>
</tbody></table>
<hr>
<h3><strong>2. 现代格式</strong></h3>
<table style="width: 100%">
<thead>
<tr>
<th>格式</th>
<th>描述</th>
<th>兼容性</th>
</tr>
</thead>
<tbody><tr>
<td><strong>WebP</strong></td>
<td>谷歌推出，优于JPEG/PNG</td>
<td><strong>Chrome、Firefox、Edge、Opera 全支持</strong>；<br> Safari 14+（macOS/iOS）部分支持，旧版需兼容性检查。</td>
</tr>
<tr>
<td><strong>AVIF</strong></td>
<td>基于AV1编码，高效压缩</td>
<td><strong>Chrome、Firefox、Edge 支持</strong>；<br> Safari 16.4+ 部分支持，旧版不兼容。</td>
</tr>
<tr>
<td><strong>SVG</strong></td>
<td>矢量图形，无限缩放</td>
<td><strong>全平台支持</strong>（包括IE9+），但复杂滤镜可能需测试。</td>
</tr>
</tbody></table>
<hr>
<h3><strong>3. 特殊格式</strong></h3>
<table>
<thead>
<tr>
<th>格式</th>
<th>描述</th>
<th>兼容性</th>
</tr>
</thead>
<tbody><tr>
<td><strong>APNG</strong></td>
<td>动态PNG，替代GIF</td>
<td><strong>Chrome、Firefox、Safari 支持</strong>；<br> Edge 79+ 支持，旧版IE/Edge 不兼容。</td>
</tr>
<tr>
<td><strong>HEIC</strong></td>
<td>苹果设备常用</td>
<td><strong>仅Safari（部分版本）</strong>，其他浏览器需转换格式。</td>
</tr>
</tbody></table>
<hr>
<h3><strong>兼容性建议</strong></h3>
<ol>
<li><strong>通用场景</strong>：优先使用 <strong>JPEG（照片）</strong> 或 <strong>PNG（透明/无损）</strong>。</li>
<li><strong>性能优化</strong>：  <ul>
<li>使用 <strong>WebP</strong>（需提供JPEG/PNG作为后备）。  </li>
<li>渐进式加载：JPEG/WebP支持渐进渲染。</li>
</ul>
</li>
<li><strong>动画需求</strong>：  <ul>
<li>简单动画：<strong>GIF</strong>（兼容性好）。  </li>
<li>高质量动画：<strong>APNG</strong> 或 <strong>WebP</strong>（需检查浏览器支持）。</li>
</ul>
</li>
<li><strong>矢量图形</strong>：<strong>SVG</strong>（响应式设计首选）。</li>
</ol>
<hr>
<h3><strong>代码示例（HTML后备方案）</strong></h3>
<pre><code class="language-html">&lt;picture&gt;
  &lt;source srcset=&quot;image.webp&quot; type=&quot;image/webp&quot;&gt;
  &lt;source srcset=&quot;image.jpg&quot; type=&quot;image/jpeg&quot;&gt;
  &lt;img src=&quot;image.jpg&quot; alt=&quot;Fallback Image&quot;&gt;
&lt;/picture&gt;
</code></pre>
<hr>
<p>如需具体版本测试，可参考 <a href="https://caniuse.com/">Can I Use</a> 或针对目标用户群体分析浏览器占比。</p>
`;

(async () => {
  htmlString = await minify(htmlString, {
    collapseWhitespace: true
  });

  const fileBuffer = await HtmlToDocx(htmlString, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true
  });
  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
})();
