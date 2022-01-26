//Повторить заданную строку str(первый аргумент) несколько numраз
//(второй аргумент). Возвращает пустую строку, если numне является
//положительным числом.Для целей этой задачи не используйте
//встроенный.repeat()метод.

//Способ №1 с помощью цыкла if
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return '';
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}

//Способ №2 с помощью цыкла for
function repeatStringNumTimes(str, num) {
    let Str = '';
    for (let i = 0; i < num; i++) {
        Str += str
    }
    return Str;
}

repeatStringNumTimes("abc", 3);