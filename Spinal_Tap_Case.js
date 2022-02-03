//Преобразование строки в спинной регистр. В спинном регистре все строчные слова
//соединены тире.


//С помощью метода split() и регулярного выражения в нем, находим все пробелы и
//подчеркивания меняем их на тире с помощью метода join(), и методом toLowerCase()
// преобразовуем все в нижнем регистре
function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}