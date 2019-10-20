<h2>What is JavaScript?</h2><br>
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
<code>'<script src=”path/to/js/file”></script>'</code><br>
2)	JS code inside HTML file<br>
<code>
'<script>
	//Your JS code here
</script>'
  </code>
<b><h2>JavaScript as a programming Language</h2></b>
<h3>Variables</h3><br>
Most of the time, a JavaScript application needs to work with information. Here are two examples:<br>
1.	An online shop – the information might include goods being sold and a shopping cart.<br>
2.	A chat application – the information might include users, messages, and much more.<br>
Variables are used to store this information.<br>
A variable is a “named storage” for data. To create a variable in JavaScript, use the let keyword.<br>
The statement below creates a variable with the name “message”:<br>
<code>let message ;</code><br>
We can also change it as many times as we want:
<code>
let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message); //alert is used to pop up an alert on the page
</code>
When the value is changed, the old data is removed from the variable:
<br>
<h3>Constants</h3>
To declare a constant (unchanging) variable, use const instead of let:<br>
<code>const myBirthday = '18.04.1982';</code><br>

Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error<br>

<code>const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
</code><br>
When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.<br>


<h3>A string</h3>

A string in JavaScript must be surrounded by quotes.<br>
<code>
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;
</code>
In JavaScript, there are 3 types of quotes.<br>
    Double quotes: "Hello".<br>
    Single quotes: 'Hello'.<br>
    Backticks: `Hello`.<br>
Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.<br>

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:<br>
<code>
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
</code><br>
The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.<br>

<b>Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!<b><br>
	<code>alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)</code>
