
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

<code>

	const myBirthday = '18.04.1982';
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
	
    let school = {
    name : "AIT",
    location : "Pune",
    established : "1994"
    }
</code><br>
Each of these keys is referred to as properties of the object. An object in JavaScript may also have a function as a member, in which case it will be known as a method of that object.
</br>
Let us see such an example :
<br>
<code>
	
    let college = {
    name: 'AIT', 
    location : 'Pune', 
    established : '1994', 
    displayInfo : function(){ 
    console.log(`${college.name} was established  
     in ${school.established} at ${college.location}`); 
	} 
	} 
    school.displayInfo();    
</code>

