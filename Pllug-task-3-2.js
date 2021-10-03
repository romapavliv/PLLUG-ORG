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

function find_br() {
    let sBrowser,
        sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Firefox") > -1) sBrowser = "Mozilla Firefox";
    else if (sUsrAg.indexOf("Opera") > -1) sBrowser = "Opera";
    else if (sUsrAg.indexOf("Trident") > -1) sBrowser = "Microsoft Internet Explorer";
    else if (sUsrAg.indexOf("Edge") > -1) sBrowser = "Microsoft Edge";
    else if (sUsrAg.indexOf("Chrome") > -1) sBrowser = "Google Chrome";
    else if (sUsrAg.indexOf("Safari") > -1) sBrowser = "Apple Safari";
    else sBrowser = "unknown";
    return sBrowser;
}

function find_os() {
    let OSVer = "";
    if (navigator.userAgent.indexOf("Mac OS X 10.4") != -1) OSVer = "MacOS Tiger";
    if (navigator.userAgent.indexOf("Mac OS X 10.5") != -1) OSVer = "MacOS Leopard";
    if (navigator.userAgent.indexOf("Mac OS X 10.6") != -1) OSVer = "MacOS Snow Leopard";
    if (navigator.userAgent.indexOf("NT 5.1") != -1) OSVer = "Windows XP";
    if (navigator.userAgent.indexOf("NT 6.0") != -1) OSVer = "Windows Vista";
    if (navigator.userAgent.indexOf("NT 6.1") != -1) OSVer = "Windows 7";
    if (navigator.userAgent.indexOf("Linux") != -1) OSVer = "Linux";
    if (navigator.userAgent.indexOf("X11") != -1) OSVer = "UNIX";

    return OSVer;
}

console.log(`${find_br()} - ${find_os()}`);

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
