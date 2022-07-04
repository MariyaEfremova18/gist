// Дан массив из чисел
const arr = [2, -5, -4, 0, 5, 3, 2, 7, 1, 6, 3, -2, 0, 1];
const arr1 = [1, 2, 3];

//Сделайте из него массив, состоящий из квадратов этих чисел
function squaring () {
   let arrSquared =  arr.map(value => Math.pow(value, 2));
   console.log(arrSquared);
};

squaring (arr);

//Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)
function returnUniqueValues () {
    let arrUnique = [];
    arr.forEach(item => {
        if (!arrUnique.includes(item)) {
            arrUnique.push(item);
        }
    });
    console.log(arrUnique);
};

returnUniqueValues (arr);

//Проверьте то, что все элементы в массиве больше нуля (результат - true/false)
function findPositiveNumbers () {
    let result = '';
    for (let item of arr) {
        if (item == 0 || item < 0) {
            result = false;
            break;
        } else result = true;
    }
    console.log(result);
};

findPositiveNumbers (arr); 

// Оставьте в массиве только отрицательные числа
function returnNegativeValues () {
    let arrNegativeValues = [];
    arr.forEach(value => {
        if (value < 0)
        arrNegativeValues.push(value);
    });
    console.log(arrNegativeValues);
};

returnNegativeValues (arr);

// Найдите сумму элементов массива
function returnSum () {
    let sum = arr1.reduce((initial, item) => initial + item, 0);
    console.log(sum);
}

returnSum ();


// Дан массив, в нем могут быть обычные элементы и подмассивы(например [1, 2, [3, 4], 5, {a: 7}])
const arrWithSub = [1, 2, [3, 4], 5, {a: 7}];

//  Оставьте в нем только подмассивы
function returnSubarrays () {
    let result = arrWithSub.find((item) => Array.isArray(item));
    console.log(result);
};

returnSubarrays (arrWithSub);


// Верните количество слов в строке, длина которых больше 4 символов
let string = 'Съешь еще этих французских булок и выпей чаю';

function returnLongWords () {
    let arrString = string.split(' ');
    let sum = 0;
    arrString.forEach(item => {
        let result = item.split('');
        if (result.length > 4)
        sum += 1;
    })
    console.log(sum);
}

returnLongWords (string);
