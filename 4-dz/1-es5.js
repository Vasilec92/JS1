/* 1.1 Сделайте в стиле es5, а затем в стиле es6, конструктор Product, который принимает параметры name и price, сохраните
их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет
уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри
функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке). */

"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  this.price = this.price - this.price * 0.25;
};

let obj2 = new Product("dog", 3000);
obj2.make25PercentDiscount();
console.log(obj2);
