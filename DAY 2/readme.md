<h1>Arrays in JavaScript</h1>

<h4> JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. Unlike most languages where array is a reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements.</h4> 


<h2>Declaration of an Array</h2>
<h4>There are basically two ways to declare an array.<br>
Example:</h4><br>

    var House = [ ];     
    var House = new array(); 
    
<h2> Accessing Array Elements </h2>
<h4>Array in JavaScript are indexed from 0 so we can access array elements as follows:</h4>

var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true]; 
alert(house[0]+" cost= "+house[1]); 
var cost_1BHK = house[1]; 
var is_for_rent = house[5]; 
alert("Cost of 1BHK = "+ cost_1BHK); 
alert("Is house for rent = ")+ is_for_rent);

<h2>Array Elements Can Be Objects</h2>

JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;


<h2>Looping Array Elements</h2>

<h4>The safest way to loop through an array, is using a for loop:</h4>

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += + fruits[i] + ;
}
text += ;

