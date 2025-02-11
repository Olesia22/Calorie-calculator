import { getResource } from "../servises/servises";

function cards () {
		//classes for cards
		class MenuCard {
			constructor(src, alt, title, description, price, parentSelector) {
				this.src = src;
				this.alt = alt;
				this.title = title;
				this.description = description;
				this.price = price;
				this.parent = document.querySelector(parentSelector);
				this.transfer = 27;
				this.changeToUAN();
			}

			changeToUAN () {
				this.price = this.price * this.transfer;
			}
			
			render () {
				const element = document.createElement('div');
				element.innerHTML = `
							<div class="menu__item">
									<img src=${this.src} alt=${this.alt}>
									<h3 class="menu__item-subtitle">${this.title}</h3>
									<div class="menu__item-descr">${this.description}</div>
									<div class="menu__item-divider"></div>
									<div class="menu__item-price">
											<div class="menu__item-cost">Цена:</div>
											<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
									</div>
							</div>
				`;
				this.parent.append(element);
			}

		}

		new MenuCard(
			"img/tabs/vegy.jpg",
			"vegy",
			'Меню "Фитнес"',
			'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
			9,
			'.menu .container'
		).render();

		new MenuCard(
			"img/tabs/elite.jpg",
			"elite",
			'Меню "Премиум"',
			'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
			11,
			'.menu .container'
		).render();

		new MenuCard(
			"img/tabs/post.jpg",
			"post",
			'Меню "Фитнес"',
			'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
			24,
			'.menu .container'
		).render();
}

export default cards;