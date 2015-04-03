//Once you complete a problem, open up Chrome and check the answer in the console. "command option i"


//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.

var arr = [10,20,30];
var first = function(array1) {
  return array1[0];
}
first(arr);

//Next problem



//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.

var arr = [40,50,60];
var last = function(array) {
  return array[arr.length - 1];
}
last(arr);

//Next Problem


//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
var looper = function(fam) {
  for (var i = 0; i < fam.length; i++) {
    alert(fam[i]);
  }
}
looper(family);

//Next problem



//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

var letters = ['A', 'B', 'C', 'D', 'E'];
var reversedLooper = function(arr) {
  for (var i = arr.length -1; i >= 0; i--) {
    alert(arr[i]);
  }
}
reversedLooper(letters);

//Next Problem


//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

var nums = [1,2,3,6,22,98,45,23,22,12];
var evens = [];
var evenFinder = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
      nums.splice(i, 1);
      i--;
    }
  }
}

evenFinder(nums);
alert(nums);


//Next problem


//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []

var divider = function(nums, evens, odds) {
  var combined = [];
  for (var i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
      odds.push(nums[i]);
    }
    else {
      evens.push(nums[i]);
    }
  }
  combined.push(evens);
  combined.push(odds);
  return combined;
}

divider(nums, evens, odds);


//Next Problem


//Above your given a function that will return a random number between 0 and 30, and an array full or numbers.
//Your job is to write a function named finder that will get a random number, then loop through the array to see if that random number is in the array. If it is, return true, if it's not, return false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var finder = function() {
  var mynum = getRandomArbitrary();
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === mynum) {
      return true;
    }
    else {
      return false;
    }
  }
}

finder();

//Next problem


//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

var str = 'this is my sentence';

var reverse = function() {
  strArray = str.split('').reverse().join('');
  return strArray;
}

reverse();


//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. Once you do that,
  write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  //Code Here

//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here



//Next Problem



//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

var numbers = [5, '9', 16, 19, '25', '34', 48];

var addTen = function(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    newArray.push((numbers[i] * 1) + 10);
  }
  return newArray;
}

addTen(numbers);


//Next Problem


//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.
var num1 = Math.floor(Math).random() * (30- 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}

var combined = function(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  }
  else {
    return arr2;
  }
}

combined(arr1, arr2);

/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

  //Code Here
