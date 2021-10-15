
// Написати функцію, яка приймає об’єкт у якості аргументу та повертає Map  з тими самими даними. Тобто просто перетворити об’єкт у Map.
const object = {1: 'a', 2: 'b', 3: 'c'};

const toMap = (obj) => {
    return new Map(Object.entries(obj));
}

const map = toMap(object);

// Написати функцію, яка приймає Map у якості аргументу та повертає об’єкт з тими самими даними. Тобто просто перетворити Map у  об’єкт.

const toObj = (map) => {
    return Object.fromEntries(map);
}

const obj = toObj(map);

console.group();
console.log(obj);
console.log(map);
console.groupEnd();
