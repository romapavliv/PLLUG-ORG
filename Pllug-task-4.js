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

// Функція яка змінює background-color наступного елемента після елемента з id="cat"
catItem.nextElementSibling.style.background = "black";

// Функція яка перетворює класи елементів списку animals і додає до цих елементів data-* атрибути з назвою класу який був прибраний. Наприклад: <li class="wild dangerous">Tiger</li> => <li data-wild data-dangerous>Tiger</li>

for(let i = 0; i < animals.children.length; i++) {
    let classItem = animals.children[i].className.split(' ')[0];
    animals.children[i].setAttribute(`data-${classItem}`, `data-${classItem}`);
    animals.children[i].removeAttribute("class");
}

// Функція яка змінює порядок елементів в списку animals - останній елемент стає першим, передостанній  - другим, і т.д.

Array.from(animals.children).reverse().forEach(el => el.parentNode.appendChild(el));

// Функція яка додає додає новий список id="fish" перед списком birds

const dataFish = ["Shark", "Salmon", "Trout", "Tuna"];
const ul = document.createElement('ul');
ul.id = "fish";

for (let i = 0, ln = dataFish.length; i < ln; i++) {
    let li = document.createElement('li');
    li.innerHTML = dataFish[i];
    ul.appendChild(li);
}

containter.appendChild(ul).after(birds);
