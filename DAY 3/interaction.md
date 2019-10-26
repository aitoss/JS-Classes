# Do implement everything explained here<br> 

# Interaction: alert, prompt, confirm

But we’ll still be using the browser as our demo environment, so we should know at least a few of its user-interface functions. In this chapter, we’ll get familiar with the browser functions <code>alert</code>, <code>prompt</code> and <code>confirm</code>.

## alert<br>
### Syntax:<br>
<code>
 alert(message);
</code><br>
This shows a message and pauses script execution until the user presses “OK”.<br>
For example:<br>
<code>alert("Hello");</code><br>
The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc. until they have dealt with the window. In this case – until they press “OK”.


## prompt
The function prompt accepts two arguments:<br>
<code>result = prompt(title, [default]);</code><br>
It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
<br><br>**title**<br>
The text to show the visitor.
<br><br>**default**<br>
An optional second parameter, the initial value for the input field.<br>
The visitor may type something in the prompt input field and press OK. Or they can cancel the input by pressing Cancel or hitting the Esc key.
The call to prompt returns the text from the input field or null if the input was canceled.
<br>**For instance:**
<code>

     let age = prompt('How old are you?', 100);
     alert(`You are ${age} years old!`); // You are 100 years old!
</code>


## confirm
### The syntax:<br>
<code>
result = confirm(question);
</code><br>
The function confirm shows a modal window with a question and two buttons: OK and Cancel.
The result is true if OK is pressed and false otherwise.
For example:<br>
<code>

     let isBoss = confirm("Are you the boss?");
     alert( isBoss ); // true if OK is pressed
</code>


