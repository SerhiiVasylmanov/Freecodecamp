//Возвращает длину самого длинного слова в предоставленном предложении.
//Ваш ответ должен быть числом.

function findLongestWordLength(str) {
    let strSplit = str.split(" ");
    let strLenght = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > strLenght) {
            strLenght = strSplit[i].length;
        }
    }
    return strLenght;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");