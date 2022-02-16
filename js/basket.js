let basketItems = [];
let tableElement = document.querySelector('.table-items');

document.querySelector('.basket').addEventListener('click', event => {
    document.querySelector('.basket__box').classList.toggle('basket__box_hidden');
})

function addToCartButtons() {
    const itemElements = document.querySelectorAll('.item');
    for (let item of itemElements) {
        item.addEventListener('click', event => {
            addItemInBasket(products[event.currentTarget.id]);
        })
    }
}

addToCartButtons();


function MarkupItemInBasket(itemObject) {
    let MarkupItem =    `
                        <tr class="table-items__item" id="${itemObject.id}">
                            <td class="table-items__item-name">${itemObject.name}</td>
                            <td class="table-items__item-counter">${itemObject.counter}</td>
                            <td class="table-items__item-price">${itemObject.price}</td>
                            <td class="table-items__item-total">${itemObject.counter * itemObject.price}</td>
                        </tr>
                        `
    tableElement.insertAdjacentHTML("beforeend", MarkupItem);
   
}

function addItemInBasket(itemObject) {
    if (itemObject.counter == 0) {
        itemObject.counter++;
        MarkupItemInBasket(itemObject);
        basketItems.push(itemObject);
    } else {
        itemObject.counter++;
        document.querySelector(`[id="${itemObject.id}"] .table-items__item-counter`).innerHTML = itemObject.counter;
        sumFinalPriceItem(itemObject);        
    }
}

/**
 * Функция считает контрольную сумму за все количество конкретного товара, 
 * сохрянет результат в свойстве sumTotal объекта и вставляет результат в верстку.
 * @param {object} itemObject - на вход принимается объект из массива соответствующий узлу в верстке.
 */
function sumFinalPriceItem(itemObject) {
    itemObject.sumTotal = itemObject.counter * itemObject.price;
    document.querySelector(`[id="${itemObject.id}"] .table-items__item-total`).innerHTML = itemObject.sumTotal;
}