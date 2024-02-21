'use strict';

const div = document.getElementsByTagName('div'),
      div1 = document.querySelector('.div1'),
      divse = document.querySelectorAll('div');

//Задает стиль одному элементу
div[0].style.backgroundColor = 'red';
div[0].style.width = '500px';
//Задает несколько стилей одновременно
div.style.cssText = 'background-color: red; width: 500px'

//Задает стили над несколькими элементами
for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = 'blue';
}

div.forEach(element => {
    element.style.backgroundColor = 'blue';
});

//Создание элемента на странице
const div = document.createElement('div');
//Добовление класса к элементу
div.classList.add('.black')
//Вставить созданый элемент по отношению к другому элементу
document.body.prepend(div)//В начало
document.body.append(div)//В конец
// ИЛИ
document.querySelector('div1').prepend(div);

//Удалить элемент на странице
div[0].remove();

//Замена элемента на странице
div[0].replaceWith(div1[0]);

//Редактирование элемента на странице 
div.innerHTML = '<h1>Hello word</h1>'
div.textContent = 'Hello word' 

//Добавление тега перед или после элемента
div.insertAdjacentHTML('beforebegin', '<h1>Hello word</h1>')
div.insertAdjacentHTML('afterbegin', '<h1>Hello word</h1>')

