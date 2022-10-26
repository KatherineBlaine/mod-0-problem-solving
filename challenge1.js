// Challenge 1:
// Given an array of strings, return only the strings that have exactly 4 characters.

// The overall goal of this challenge is to write code that will instruct the computer to go through an array of strings 
// and print only the strings that have exactly 4 characters.

// Write a for statement that starts at index position 0 and stops after the last element in the array
// Create an if statement within the for statement that will print the value of an element if and only if
// the length of the string is equal to 4.


var words = ["Cloth", "Mug", "Phone", "Computer", "Bugs", "Pens", "Water", "Notebook", "Tape", "Coin"]

// Based on this array, I would expect the code I run to only print "Bugs" "Pens" "Tape" and "Coin" because these are the only
// strings in my array that have exactly 4 characters.

for (var i = 0; i < words.length; i++) {
    if (words[i].length === 4)
    console.log(words[i])
}

