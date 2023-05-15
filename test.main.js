//2. Write a function that takes a string as input and returns the reverse of the string.

var str = "HUSSAIN"
function reverseString(name) {
    let newstr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i]

    }
    return newstr
}

console.log(reverseString(str))

var str1 = "tibet"
var str2 = ""

function reverse(str1) {
    for (let i = str1.length - 1; i >= 0; i--) {
        str2 += str1[i]

    }
    return str2
}

console.log(reverse(str1))

//3. Write a function that takes an array of numbers as input and
// returns the sum of the two largest numbers in the array.

var numbers = [2, 100, 150, 80, 9, 140]



function sumoflargestNums(numbers) {
    let l1 = 0
    let l2 = 0
    let sum = 0
    let large = 0
    let largest = 0
    sum = numbers[0] + numbers[1]


    for (var i = 0; i < numbers.length; i++) {



        for (var j = 0; j < numbers.length; j++) {
            if (sum <= numbers[i] + numbers[j] && i != j) {
                sum = numbers[i] + numbers[j]
                large = numbers[i]
                largest = numbers[j]


            }

        }

    }
    return { large, largest, sum }
}


console.log(sumoflargestNums(numbers))

// 1. Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers 
//from the array that adds up to the target number. If no such pair is found, the function should return null.

var arrnum = [2, 4, 5, 8, 9, 12]
var x = 20

function sumofpair(arrnum, x) {
    let num1 = 0
    let num2 = 0
    let sum = 0
    for (let i = 0; i < arrnum.length; i++) {

        for (let j = 0; j < arrnum.length; j++) {
            if (arrnum[i] + arrnum[j] == x) {
                num1 = arrnum[i]
                num2 = arrnum[j]
                sum = x

            }
        }
    }
    if (x == sum)
        return { num1, num2, x }
    else
        return null
}
console.log(sumofpair(arrnum, x))

//4. Write a function that takes an array of strings as input and returns a new array 
// that contains only the strings that have more than three characters.

var strarr = ["hi", "hello", "hey", "howdy", "careem"]

function filterStrings(strarr) {

    let newstr = []
    for (let i = 0; i < strarr.length; i++) {
        if (strarr[i].length > 3)
            newstr.push(strarr[i])
    }
    return newstr
}

console.log(filterStrings(strarr))

// 8. Write a function that takes a string as input and returns the most frequent character in the string. 
//If there are multiple characters that appear with the same frequency, return the one that appears first.

//  Example input: mostFrequent("hello world")  
//  Example output: "l"

var frearr = "mathematics"

function mostFrequent(farr) {
    let c = []
    for (var i = 0; i < frearr.length; i++) {

        for (var j = 0; j < frearr.length; j++) {
            if (frearr[i] == frearr[j] && i != j) {
                c.push(frearr[i])
                break
            }
        }
    }
    return c
}

console.log(mostFrequent(frearr))

// [2, 5, 3, 5]10. Write a function that takes an array of numbers as input and returns
// the index of the first number in the array that is greater than or equal to 10.

// Example input: firstGreater([1, 5, 15, 20])  
// Example output: 2

var arrofG = [1, 15, 18, 20, 10]
function firstGreater(arrofFG) {
    var index = 0
    var n = 0
    for (var i = 0; i < arrofG.length; i++) {
        if (arrofG[i] >= 10) {

            index = i
            n = arrofG[i]
            break
        }

    }
    return { index, n }

}
console.log(firstGreater(arrofG))

//5. Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

//Example input: filterEven([1, 2, 3, 4, 5, 6])
// Example output: [2, 4, 6]



var arr = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}


//W7. Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

//Example input: isPalindrome("racecar")
//Example output: true
var strpln = "racecar"
function checkPalindrome(string) {


    const len = strpln.length;

    
    for (let i = 0; i < len / 2; i++) {

       
        if (strpln[i] !== strpln[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}