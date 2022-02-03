//Создайте функцию, которая просматривает массив объектов (первый аргумент) и
//возвращает массив всех объектов, имеющих совпадающие пары имени и значения(второй аргумент).
//Каждая пара имени и значения исходного объекта должна присутствовать в объекте из
//коллекции, если он должен быть включен в возвращаемый массив.

//Например, если первый аргумент[{ first: "Romeo", last: "Montague" },
//{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
//а второй аргумент { last: "Capulet" }, то вы должны вернуть третий объект из
//массива(первый аргумент), потому что он содержит имя и его значение, которые
//были переданы в качестве второго аргумента.


//С помощью Object.keys() мы записываем ключи 'source' в переменную.
//С помощью every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
//С помощью hasOwnProperty() проверяем содержит ли объект указанное свойство.
function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return sourceKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });