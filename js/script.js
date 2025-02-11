"use strict";

import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import slides from './modules/slides';
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modal('[data-modal]', '.modal', modalTimerId);
	calc();
	cards();
	forms('form', modalTimerId);
	slides({
		container: '.offer__slider', 
		nextArrow: '.offer__slider-next', 
		prevArrow:'.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		slide: '.offer__slide',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
	timer('.timer', '2025-09-22');
		// // Инициализация слайдера
		// showSliders(slideIndex);

		// if (slides.length < 10) {
		// 	total.textContent = `0${slides.length}`;
		// } else {
		// 	total.textContent = slides.length;
		// }

		// function showSliders(n) {
		// 		// Если индекс больше числа слайдов, то устанавливаем первый слайд
		// 		if (n > slides.length) {
		// 				slideIndex = 1;
		// 		}

		// 		// Если индекс меньше 1, то устанавливаем последний слайд
		// 		if (n < 1) {
		// 				slideIndex = slides.length;
		// 		}

		// 		// Прячем все слайды
		// 		slides.forEach((item) => {
		// 				item.style.display = 'none';
		// 		});

		// 		// Показываем текущий слайд
		// 		slides[slideIndex - 1].style.display = 'block';

		// 		if (slides.length < 10) {
		// 			current.textContent = `0${slideIndex}`;
		// 		} else {
		// 			current.textContent = slideIndex;
		// 		}
		// };

		// // Функция для изменения индекса слайда
		// function plusSliders(n) {
		// 		showSliders(slideIndex += n);
		// }

		// // Обработчик событий для кнопки "предыдущий"
		// prev.addEventListener('click', () => {
		// 		plusSliders(-1);
		// });

		// // Обработчик событий для кнопки "следующий"
		// next.addEventListener('click', () => {
		// 		plusSliders(1);
		// });

}); 