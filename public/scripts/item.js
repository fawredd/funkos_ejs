const itemQuantity = document.querySelector('#quantity');
const itemAdd = document.querySelector('#add');
const itemSubtract = document.querySelector('#subtract');

itemQuantity.addEventListener('input', function () {
    this.value = this.value.replace(/^0+/, '');
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value === '') {
        this.value = 1;
    };
});

itemAdd.addEventListener('click', () => {
    itemQuantity.value = Number(itemQuantity.value) + 1;
});

itemSubtract.addEventListener('click', () => {
    if (Number(itemQuantity.value) >= 2) {
        itemQuantity.value = Number(itemQuantity.value) - 1;
    }
});

itemQuantity.readOnly = true;
