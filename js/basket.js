let basketItems = [];

document.querySelector('.basket').addEventListener('click', event => {
    document.querySelector('.basket__box').classList.toggle('basket__box_hidden');
})

function AddToCartButtons() {
    const buttons = document.querySelectorAll('.item__added');
    for (let button of buttons) {
        button.addEventListener('click', event => {
            event.target.dataset
        })
    }
}

AddToCartButtons();