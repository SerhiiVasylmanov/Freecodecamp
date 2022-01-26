//Создайте функцию, которая просматривает массив arrи возвращает первый
//элемент в нем, прошедший «проверку на истинность». Это означает, что
//для данного элемента x«проверка на истинность» пройдена,
//если func(x)есть true.Если ни один элемент не прошел тест, верните undefined.


//Способ №1 с помощью цыкла for
function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}

//Способ №2 с помощью метода find, так как он возвращает первой найденный элемент
//в массиве, который удовлетворяет условию или возвращает undefined
function findElement(arr, func) {
    return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);