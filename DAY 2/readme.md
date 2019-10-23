<h1>Arrays in JavaScript</h1>

<h4> JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. Unlike most languages where array is a reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements.</h4> 


<h2>Declaration of an Array</h2>
<h4>There are basically two ways to declare an array.<br>
Example:</h4><br>

    var House = [ ];     
    var House = new array(); 
    
<h2> Accessing Array Elements </h2>
<h4>Array in JavaScript are indexed from 0 so we can access array elements as follows:</h4>
<code>
    
    
var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true]; 
alert(house[0]+" cost= "+house[1]); 
var cost_1BHK = house[1]; 
var is_for_rent = house[5]; 
alert("Cost of 1BHK = "+ cost_1BHK); 
alert("Is house for rent = ")+ is_for_rent);
</code>
<h2>Array Elements Can Be Objects</h2>

JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

<code>
    
    
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
</code>

<h2>Looping Array Elements</h2>

<h4>The safest way to loop through an array, is using a for loop:</h4>
<code> 
    
    var fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";                    
   </code>
   
  <h4> You can also use the Array.forEach() function:</h4>

     var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";

    function myFunction(value) {
    text += "<li>" + value + "</li>";
    } 
    
   Array.forEach() calls a function for each array element.

<h2>Converting Arrays to Strings</h2>

The JavaScript method toString() converts an array to a string of (comma separated) array values.

     var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits.toString();
    
    
<h2>Popping and Pushing</h2>

When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.    

<h3>Popping</h3>

The pop() method removes the last element from an array:

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();              // Removes the last element ("Mango") from fruits 
    
    
<h3>Pushing</h3>

The push() method adds a new element to an array (at the end):

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits 
    
  <h3>Shifting Elements</h3>

Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();            // Removes the first element "Banana" from fruits   
    
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits 
    
 <h3>Deleting Elements</h3>

Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

    var  fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];           // Changes the first element in fruits to undefined

Using delete may leave undefined holes in the array. Use pop() or shift() instead.
<h3>Merging (Concatenating) Arrays</h3>
    The concat() method creates a new array by merging (concatenating) existing arrays:
Example (Merging Two Arrays)


    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys 
