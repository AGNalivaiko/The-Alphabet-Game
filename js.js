"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/
const letters = document.querySelectorAll('.boxes__box');
const audio = new Audio('audio/Mountain Audio - Menu Click.mp3')
let newBox;

for (let i = 0; i < letters.length; i++){
    letters[i].addEventListener('click', () => {
        if (letters[i].previousElementSibling != null){
            letters[i].previousElementSibling.before(letters[i]);
            audio.play();
            newBox = document.querySelectorAll('.boxes__box');
        }
        else if (letters[i].nextElementSibling != null) {
            letters[i].nextElementSibling.after(letters[i]);
            ementSibling.before(letters[i]);
            audio.play();
        }
        
    })
}
