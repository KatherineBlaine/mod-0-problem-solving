// Challenge 3
// Given an array of strings, return only the words that begin with the letter "t".

// The goal of this challenge is to write code that will go through an array of strings and print an element of my string
// to my console if and only if the first letter of the string is 't'

// I will need to write a for statement that will begin at the first element of my array and end at the last element of my array
// Within my for statement I will need to write a conditional if statement so I can define the elements that I want to print
// I will need to use logical operators and a command that will evaluate the first letter of a string to create a conditional 
// statement that will log an element to my console if and only if that element starts with 't'

var words = ["truck", "Taxi", "Car", "wheel", "train", "Plane", "turn"]

for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("t")) [
    console.log(words[i])
    ]
}