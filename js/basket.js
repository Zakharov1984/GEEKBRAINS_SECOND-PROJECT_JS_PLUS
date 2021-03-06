let basketItems = [];
let tableElement = document.querySelector('.table-items');
let totalSumItemTable = document.querySelector('.table-items__total');
let deleteBasketItemElements = [];
let totalSumAllitems = 0;
let counterAllGoodsElement = document.querySelector('.basket__counter-goods');

document.querySelector('.basket').addEventListener('click', event => {
    document.querySelector('.basket__box').classList.toggle('basket__box_active');
}) 

/**
 * Отменяем всплытие события, чтобы оно не дошло до 'basket'.
 */
document.querySelector('.basket__box').addEventListener('click', event => {
    event.stopPropagation();
})

/**
 * В функции получаем все эелементы 'добавить' товаров,
 * ставим на них слушатель события клик(событие будет присходить на кнопке).
 *  и обработчик события - который будет добавлять элемент в корзину. 
 */
function addToCartButtons() {
    const itemElements = document.querySelectorAll('.item__added');
    for (let item of itemElements) {
        item.addEventListener('click', event => {
            event.stopPropagation(); // -
            addItemInBasket(products[event.target.id]);
        })
    }
}

addToCartButtons();


/**
 * Функция делает проверку на количество товара, 
 * если оно равно нулю, увеличивает счетчик на единицу,
 * вызывает функцию MarkupItemInBasket(); - для отрисовки элемента в корзине,
 * пушит объект в массив basketItems, который хранит объекты на основе которых производились действия добавления в корзину. 
 * Иначе, если счетчик подсчета количества добавленных товаров больше нуля, 
 * увеличивает счетчик на единицу, вызывает функцию sumFinalPriceItem(); ,
 * для посчета контрольной суммы за все количество  конкретного товара, *
 * а также при кадом вызове обновляет значение в переменной deleteBasketItemElements, 
 * для актуального количества елементов, на каоторые будут ставиться оюработчики события, для удаления товаров,
 * а также вызывает функцию по подсчету общей суммы всех товаров.
 * @param {*} itemObject - на вход принимается объект из массива соответствующий узлу в верстке.
 */
function addItemInBasket(itemObject) {
    if (itemObject.counter == 0) {
        itemObject.counter++;
        MarkupItemInBasket(itemObject);
        basketItems.push(itemObject);
    } else {
        itemObject.counter++;
        document.querySelector(`[id="${itemObject.id}"] .table-items__item-counter`).innerHTML = itemObject.counter;        
    }
        sumFinalPriceItem(itemObject);
        totalSumAlletemsFunction();
        counterAllGoods();
        
}

/**
 * Функция добавляет строку с разметкой товара карзины в родительский эелемент.
 * @param {*} itemObject - на вход принимается объект из массива соответствующий узлу в верстке.
 */
function MarkupItemInBasket(itemObject) {
    let MarkupItem =    `
                        <tr class="table-items__item" id="${itemObject.id}">
                            <td class="table-items__item-delete" data-deleteNumber="${itemObject.id}">Удалить товар(1шт)</td>
                            <td class="table-items__item-name">${itemObject.name}</td>
                            <td class="table-items__item-counter">${itemObject.counter}</td>
                            <td class="table-items__item-price">${itemObject.price}</td>
                            <td class="table-items__item-total">${itemObject.counter * itemObject.price}</td>
                        </tr>
                        `
    totalSumItemTable.insertAdjacentHTML("beforebegin", MarkupItem);
   
}

/**
 * Функция считает контрольную сумму за все количество конкретного товара, 
 * сохрянет результат в свойстве sumTotal объекта и вставляет результат в верстку.
 * @param {object} itemObject - на вход принимается объект из массива соответствующий узлу в верстке.
 */
function sumFinalPriceItem(itemObject) {
    itemObject.sumTotal = itemObject.counter * itemObject.price;
    document.querySelector(`.table-items__item[id="${itemObject.id}"] .table-items__item-total`).innerHTML = itemObject.sumTotal;
}

/**
 * Функция считает контрольную сумму всех товаров в корзине и вставляет в верстку.
 */
function totalSumAlletemsFunction() {
    let sumAllItems = 0;
    basketItems.forEach(element => {
        sumAllItems = sumAllItems + element.sumTotal;
    })
    totalSumItemTable.querySelector('span').innerHTML = sumAllItems;
}

/**
 * Функция считает общее количество товаров в корзине.
 */
function counterAllGoods() {
    let counterAllGoods = 0;
    basketItems.forEach(element => {
        counterAllGoods = counterAllGoods + element.counter;
    })
    counterAllGoodsElement.innerHTML = counterAllGoods;
}




