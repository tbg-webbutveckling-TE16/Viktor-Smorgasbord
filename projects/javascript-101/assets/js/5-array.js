//list a group of friends
var friend1 = "Knurt"
var friend2 = "Berit"
var friend3 = "Coco"
var friend4 = "Guts"

//list a group of friends using an array
//              0       1       2       3
var friends = ["Knurt","Berit","Coco","Guts"];//strings numbers,booleans,objects
 // arrays startar på index 0
console.log(friends[2] + "<3" + friends[3] );
function newName() {
    friends[2] = "Caska";
    friends[3] = true;

}
newName();

console.log(friends[2] + "<3" + friends[3] );

/*
**********************************
Arrays- different ways and values
***********************************
*/

var colors = [];//standard
var color
s = new Array();//Not that common
var randomArray = ["string", 31, true, false];
console.log(randomArray.length);
/*
*******************************
Arrays - built-in methods
*******************************
*/

//console.log()

// push(), pop(), shift() unshift, indexOf(), slice,

//push() - add an item at the end of an array
colors = ["red","green", "blue"];
console.log(colors);
colors.push("purple");
console.log(colors);

// pop() remove an item at the end of the array
colors.pop();
console.log(colors);
console.log(colors);

//unshift() - add an item at the start of the array
colors.unshift("yellow");
console.log(colors);

// shift() - remove an item at the start of the array
color.shift();
console.log(colors);

//indexOf() - find the index of an item in the array
console.log(colors,indexOf("green")); // index of an item in the array
console.log(colors,indexOf("cyan")); // -1 if the value is not found

// slice() -copy parts of an array
var fruits = ["banana","orange","lemon","mango","pear"];

//copy the 2nd and 3rd fruit
//specify index where the new array starts(1), and ends(3), does not include
//index  3
var citrus = fruits.slice(1, 3);
console.log(citrus);

var copyfruits = fruits.slice(fruits);
console.log(copyfruits);



/*
**********************
Arrays-muntligt
**********************
*/


/*var numbers = [2,4,30,31];
console.log(numbers[numbers.length]);
*/

var friendGroups = [
    ["A-dog", "B-dog", "C-dog"],
    ["F-cat", "G-cat", "H-cat"],
    ["I-man", "J-man", "K-man"],
]
console.log(friendGroups[1][1]);

/*
******************************
Arrays- iteration-upprepning
******************************
*/
//               0          1           2           3       4       5       6
var cars = ["Thanos car", "BMW","Ford mustang","Ferrari","Lada","Landa","Vore car"];
for(var i = 0; i < cars.length; i++){
console.log(cars[i]);
}


/*
***************************
Arrays-iteration-forEach
***************************
*/