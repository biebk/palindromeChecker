/*
This function is invoked when user click any of the radio buttons. This is used to change
the attribute value of the input box so your gets the correct information on input box.

*/
var radioChecker = () => {
    var inputData = document.getElementById("data");
    var radioBtn = document.querySelector("input[name='user-choice']:checked").value;

    if (radioBtn == "number") {
        inputData.setAttribute("placeholder", "Enter a number ...");
        inputData.setAttribute("type", "number");
    }
    else {
        inputData.setAttribute("placeholder", "Enter a string ...");
        inputData.setAttribute("type", "text");
    }
}
/*
This is the main function that is being called when user clicks on check btn. This will
first check what the user is wanting , trying to check the number or string as palindrome.
Depending on that conditional will run and we get the result.
*/
var palindromeChecker = () => {
    var inputData = document.getElementById("data");
    var attributeValue = inputData.getAttribute("type");
    var result = document.querySelector(".result");

    if (attributeValue == "number") {
        var number = parseInt(inputData.value);
        var reverseNumber = 0;
        var tempNumber = number;
        while (number != 0) {
            var r = number % 10;
            reverseNumber = reverseNumber * 10 + r;
            number = Math.trunc(number / 10);
        }

        if (reverseNumber === tempNumber) {
            result.style.opacity = 1;
            result.innerText = "Yes, it's a palindrome !";
        }
        else {
            result.style.opacity = 1;
            result.innerText = "No, it's not a palindrome !";
        }
    }
    else {
        var string = inputData.value;
        var stringArray = string.split("");
        var reverseArray = stringArray.reverse();
        var reversedString = reverseArray.join("");
        if (reversedString == string) {
            result.style.opacity = 1;
            result.innerText = "Yes, it's a palindrome !";
        }
        else {
            result.style.opacity = 1;
            result.innerText = "No, it's not a palindrome !";
        }
    }
}
//This is the function that clears the input data . It is just as refreshing the page 
//so that code can re-run from beginning
var resetData = () => {
    var number = document.getElementById("data");
    var result = document.querySelector(".result");
    number.value = "";
    result.style.opacity = 0;
}