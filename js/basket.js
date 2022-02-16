let basketItems = [];
let tableElement = document.querySelector('.table-items');

document.querySelector('.basket').addEventListener('click', event => {
    document.querySelector('.basket__box').classList.toggle('basket__box_hidden');
})

function AddToCartButtons() {
    const itemElements = document.querySelectorAll('.item');
    for (let item of itemElements) {
        item.addEventListener('click', event => {
            MarkupItemInBasket(products[event.currentTarget.id]);
        })
    }
}

AddToCartButtons();


function MarkupItemInBasket(itemObject) {
    let MarkupItem =    `
                        <tr class="table-items__item">
                            <td>${itemObject.name}</td>
                            <td>${itemObject.counter}</td>
                            <td>${itemObject.price}</td>
                            <td>${itemObject.counter * itemObject.price}</td>
                        </tr>
                        `
    tableElement.insertAdjacentHTML("beforeend", MarkupItem);
   
}