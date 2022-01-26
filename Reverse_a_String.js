//Переверните предоставленную строку.
//Возможно, вам придется превратить строку в массив, прежде чем
//вы сможете ее изменить.
//Ваш результат должен быть строкой.


//Способ №1 с помощью reverse
function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");

//Способ №2 с помощью метода charAt
function reverseString(str) {
    let newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}

reverseString("hello");