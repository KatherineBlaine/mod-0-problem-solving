// Challenge 2:
// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// This challenge is asking me to create an array with a mix of uppercase and lowercase letters, and to write code that will
// go through each string and print each element but only in ALL lowercase letters.

// I will need to write a for statement that will start at the first statement of the array and only go through
// the elements one time.
// I will need to write a console.log statement with a command that will convert all uppercase letters to lowercase letters 
// for each value of my array.

var words = ["CameRa", "CoMpUtER", "CLaSS", "cOuRt", "WiTCH", "fENcE"]

for (var i = 0; i < words.length; i++) {
    console.log(words[i].toLowerCase())
}

