'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // конструктор который создаёт новый объект

    // request.open(method, url, async, login, pass); // собирает настройки которые потом помогут сделать запрос

    request.open('GET', 'js/current1.json');
    // а что иммено мы передаём (HTTP заголовки);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); // body - те данные которые улетают на сервер (POST запрос)

    // request.addEventListener('readystatechange', () => { // отслеживание запроса в текущий момент
    //     if (request.readyState === 4 && request.status === 200) {
    //         // console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = 'Что-то пошло не так';
    //     }
    // });

    request.addEventListener('load', () => { // отслеживание запроса в текущий момент
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status - свойство которое показывает статут
    //  statusText - текстовое написание ответа от сервера
    // response - ответ от сервера (ответ от бека)
    // readyStaty - текущее состояние нашего запроса


});