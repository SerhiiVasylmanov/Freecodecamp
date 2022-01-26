//Возвращает массив, состоящий из наибольшего числа из каждого предоставленного
//подмассива.Для простоты предоставленный массив будет содержать ровно 4
//подмассива.
//Помните, что вы можете перебирать массив с помощью простого цикла for и
//обращаться к каждому члену с помощью синтаксиса массива arr[i].

//Способ №1 с помощью метода reduce
function largestOfFour(arr) {
    return arr.map(function (group) {
        return group.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        });
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Способ №2 с помощью метода bind
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);