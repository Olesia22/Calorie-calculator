'use strict';

class User  {
	constructor (name, age) {
		this.name = name;
		this._userAge = age;
	}

	#surname = 'Petrychenko';

	get surname() {
    return this.#surname;
  }

	set surname(name) {
		if (typeof name === 'string' && name.length > 4) {
			this.#surname = name;
		} else {
			console.log('Error');
		}
	}

	say = () => {
		console.log(`Имя пользвотеля: ${this.name}${this.#surname}, возраст ${this._userAge}`);
	}

	get age() {
		return this._userAge;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._userAge = age;
		} else {
			console.log('Недопустимое значение');
		}
	}
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);

ivan.surname = 'Akopyan';

console.log(ivan.surname);
ivan.say();