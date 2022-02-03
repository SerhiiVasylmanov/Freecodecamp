//Вам будет предоставлен начальный массив (первый аргумент в destroyerфункции),
//за которым следуют один или несколько аргументов.Удалите все элементы из
//исходного массива, которые имеют то же значение, что и эти аргументы.
//Примечание.Вы должны использовать arguments объект.

//Попробовал сделать с помощью метода reduce().
function destroyer(arr) {
    let args = [...arguments];

    return arr.reduce((acc, item) => {
        if (!args.includes(item)) {
            acc.push(item);
        }
        return acc;

    }, [])
}

//С помощью метода filter(), includes() 
function destroyer(arr) {
    let args = [...arguments];

    return arr.filter(function (item) {
        return !args.includes(item);
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))