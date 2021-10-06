const animals = document.getElementById('animals');
const birds = document.getElementById('birds');
const dangerous = document.querySelector('.dangerous');
const pet = document.querySelectorAll('.pet');
const li = document.querySelectorAll('li');
const catItem = document.getElementById('cat');

// Функція яка збільшує розмір шрифту всіх елементів списку animals
animals.style.fontSize = "20px";

// Функція яка змінює колір тексту на червоний всім елементам які мають клас dangerous
dangerous.style.color = "red";

// Функція яка видаляє всі класи останнього елемента списку animals
animals.lastElementChild.removeAttribute("class");

// Функція яка додає додає новий елемент в список birds - після цього це має бути список у якому новий елемент є першим
let newItem = document.createElement('li').innerText = "new Bird";
birds.prepend(newItem);

// Функція яка додає додає новий елемент в список birds - після цього це має бути список у якому новий елемент є останнім
let newItem = document.createElement('li').innerText = "new Bird";
birds.append(newItem);

// Функція яка видаляє всі елементи які мають клас pet, але якщо крім класу pet є ще інші класи, то вони повинні залишитись
li.forEach(el => el.classList == 'pet'? el.remove() : el);
