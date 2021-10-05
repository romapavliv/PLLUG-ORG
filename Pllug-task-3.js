
// Створити функцію яка б отримувала параметром масив з елементів різних типів
// (строки, масиви, числа, об’єкти і т.д), на виході має повернути строку у camel case
// (приклад строки у camel case: thisIsExampleOfTheCamelCase), яка б поєднувала в собі
// всі елементи масиву які є строками.

const func = arr => {
    let camelCase = "";
    const strArr = arr.filter(el => typeof el === 'string');
    strArr.forEach(el => camelCase = (camelCase + el[0].toUpperCase() + el.slice(1)));
    camelCase = camelCase[0].toLowerCase() + camelCase.slice(1);
    return camelCase;
}

const data = ["this", 1, ["111"], true, "is", { name: "Andrew" }, 2, [3], "example", 3, true, ["222"], "of", { name: "Andrew" }, 4, true, [3], "the", 5, { name: "Andrew" }, ["123"], "camel", 6, [12, 8], "case"];

// thisIsExampleOfTheCamelCase
console.log(func(data));

// Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і
// повертала б масиву у якому кожен елемент масиву є літерою англійського алфавіту
// відповідний конкретному елементу масива (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …).
//  Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]

const nums = ars => {
    newArr = [];
    const str = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < ars.length; i++) {
        newArr.push(str[ars[i]-1]);
    }
    return newArr;
}

console.log(nums([4, 3, 22, 11]));

// Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’})
// і повертає новий об’єкт у який містить тільки числа більші рівні 0.

const func = obj => {
    const newArr = [];
    const arr = Object.entries(obj);
    for (let i = 0; i < arr.length; i++) {
        arr[i][1] > 0
        ? newArr.push(arr[i])
        : arr[i];
    }
    return Object.fromEntries(newArr);
}

console.log(func({ a: 22, b: -11.35, c: 41.2, d: "hello" }));

Завдання виконано, але назви функцій приблизно мають називатись так який функціонал вони киконують.
