//Обрезать строку (первый аргумент), если она длиннее заданной
//максимальной длины строки(второй аргумент).Вернуть усеченную
//строку с ...окончанием.

//Способ №1
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

//Способ №2
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);