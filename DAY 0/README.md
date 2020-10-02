<h3>Youtube Reference : <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax">Click Here</a></h3><br>
<h2>What is JavaScript?</h2>
JavaScript was initially created to “make web pages alive”.<br>
The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.<br>
In this aspect, JavaScript is very different from another language called Java.<br>
<h3>Why is it called JavaScript?</h3><br>
When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.<br>
But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all. <br>
<b>‘Java and JavaScript have the same relation as that of car and carpet ‘- Gitman</b>
<br>
Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.<br>
The browser has an embedded engine sometimes called a “JavaScript virtual machine”.<br>
Different engines have different “codenames”. For example:
<ul>
  <li>V8 – in Chrome and Opera.</li>
  <li>SpiderMonkey – in Firefox.</li>
  </ul>
<b>How do engines work?</b><br>
Engines are complicated. But the basics are easy.
<ol>
  <li>	The engine (embedded if it’s a browser) reads (“parses”) the script.</li>
  <li>	Then it converts (“compiles”) the script to the machine language.</li>
  <li>	And then the machine code runs, pretty fast.</li>
  </ol>
The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and applies optimizations to the machine code based on that knowledge. When it’s done, scripts run quite fast.
<br>
<h2>Programming In Javascript : </h2><br>
<b>JavaScript in Frontend</b><br>
To include and run JavaScript in your HTML file, you need to include the JavaScript File by the <script> tag or you can also write the javascript code inside the HTML file in the script tag.

1)	Include External File<br>
<code>
	
	<script src="path_to_js_file"></script>
</code><br>
2)	JS code inside HTML file<br>
<code>
	
	<script>
		//Your JS code here<br>
	</script>
  
  </code>