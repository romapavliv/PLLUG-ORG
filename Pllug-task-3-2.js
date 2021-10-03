// Скрипт який виводить в консоль дату і час коли DOM побудований, але css, зображення ще не завантажились.

document.addEventListener("DOMContentLoaded", () => {
    console.log(new Date(),"DOMContentLoaded");
})

// Скрипт який виводить в консоль дату і час коли DOM побудований і css, зображення вже завантажились.

window.onload = () => {
    console.log(new Date(), "onload");
}

// Скрипт який виводить в консоль дату і час коли юзер натиснув на закрити вкладку або перезавантажити сторінку.

window.addEventListener("unload", function() {
    console.log(new Date(), "unload - true");
    localStorage.setItem("unload", "true");
  })

// Скрипт який виводить повертає назву браузера та назву операційної системи через дефіс "-" як одну строку.

// Скрипт який змушує браузер показувати сповіщення, коли ви намагаєтесь перезавантажити сторінку, видалити вкладку, чи вимкнути браузер.

window.onbeforeunload = function () {
    console.log("Ви впевнені, що бажаєте оновити/закрити сторінку?");
    return "";
}

// Скрипт який виводить в консоль скільки секунд юзер перебував на сторінці, після того як юзер натиснув на закрити вкладку або перезавантажити сторінку.

let startTime;
let endTime;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Time Tracker was started");
    startTime = new Date();
    for (let i = 0; i < 1000; i++) {
        Math.sqrt(i);
    }
});

window.onbeforeunload = function () {
    endTime = new Date();
    console.log(`Час перебування на сторінці становив: ${Math.floor((endTime.getTime() - startTime.getTime())/1000)} сек`);
    return "";
}
