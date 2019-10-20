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
<code><script src="path_to_js_file"></script></code><br>
2)	JS code inside HTML file<br>
<code>
<script><br>
	//Your JS code here<br>
</script><br>
  </code><br>
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
let message;<br>

message = 'Hello!';<br>

message = 'World!'; // value changed<br>

alert(message); //alert is used to pop up an alert on the page<br>
</code>
When the value is changed, the old data is removed from the variable:
<br>
<h3>Constants</h3>
To declare a constant (unchanging) variable, use const instead of let:<br>
<code>const myBirthday = '18.04.1982';</code><br>

Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error<br>

<code>const myBirthday = '18.04.1982';<br>
myBirthday = '01.01.2001'; // error, can't reassign the constant!<br>
</code><br>
When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.<br>
<h3>TypeOf variables</h3>
<b>Null vs undefined</b><br>
undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.<br>
In short When the variable is not initialized the typeof variable is undefined, while null is is assigned to a variable by the programmer explicitly. 
<h3>A string</h3>
A string in JavaScript must be surrounded by quotes.<br>
<code>
let str = "Hello";<br>
let str2 = 'Single quotes are ok too';<br>
let phrase = `can embed ${str}`;<br>
</code>
In JavaScript, there are 3 types of quotes.<br>
    Double quotes: "Hello".<br>
    Single quotes: 'Hello'.<br>
    Backticks: `Hello`.<br>
Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.<br>

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:<br>
<code>
let name = "John";<br>
// embed a variable<br>
alert( `Hello, ${name}!` ); // Hello, John!<br>
// embed an expression<br>
alert( `the result is ${1 + 2}` ); // the result is 3<br>
</code><br>
The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.<br>

<b>Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!</b><br>
<code>alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)</code><br><br>


<h3>Functions in JavaScript</h3>
A function is a set of statements that take inputs, do some specific computation and produces output. Basically, a function is a set of statements that performs some tasks or does some computation and then returns the result to the user.<br>
<b>Syntax</b>
<code>
	function functionName(Parameter1, Parameter2, ..)<br>
{
    // Function body<br>
}
</code>

<h3>Objects in JavaScript</h3>
An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything.<br>
To understand this rather abstract definition, let us look at an example of a JavaScript Object :<br>
<code>
let school = {<br>
    name : "Vivekananda School",<br>
    location : "Delhi",<br>
    established : "1971"<br>
}</code><br>
Each of these keys is referred to as properties of the object. An object in JavaScript may also have a function as a member, in which case it will be known as a method of that object.
</br>
Let us see such an example :
<br>
<code>
// javascript code demonstrating a simple object ,<br>
let college = { <br>
    name: 'AIT', <br>
    location : 'Pune',<br> 
    established : '1994', <br>
    displayInfo : function(){ <br>
        console.log(`${college.name} was established  <br>
              in ${school.established} at ${college.location}`); <br>
    } <br>
} <br>
school.displayInfo();    
</code>

<h3>ToDo Assignment</h3>
<ol>
	<li>Make a HTML form and have proper input fields as required for a resume.</li>
	<li>Get the values from the form by the use of document.getElementById('id_name').value after click of submit button</li>
	<li>Make a Simple template resume format and fit the picked up values in that template by the use of `${variable_name}` format as explained above.</li>
	
</ol>
	
