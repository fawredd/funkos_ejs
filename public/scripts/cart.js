const cartItem = document.querySelectorAll('.carrito__item');

if (cartItem){
    cartItem.forEach((item, index) => {
        let buttonAdd = document.querySelector(`#add-${index}`);
        let buttonSubtract = document.querySelector(`#subtract-${index}`);
        let itemQuantity = document.querySelector(`#quantity-${index}`);

        itemQuantity.readOnly = true;

        itemQuantity.addEventListener('input', function () {
            this.value = this.value.replace(/^0+/, '').replace(/[^0-9]/g, '');
            if (this.value === '') {
                this.value = 1;
            };
        });
        
        buttonAdd.addEventListener('click', () => {
            itemQuantity.value = Number(itemQuantity.value) + 1;
            buttonAdd.disabled = true;
            buttonSubtract.disabled = true;
        });
        
        if (Number(itemQuantity.value) > 1) {
            buttonSubtract.addEventListener('click', () => {
                itemQuantity.value = Number(itemQuantity.value) - 1;
                buttonAdd.disabled = true;
                buttonSubtract.disabled = true;
            });
        };
    });
};

const quantityUpdate = (itemId, quantityOperation) => {

    const data = { quantity: quantityOperation };

    fetch(`/shop/item/${itemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        location.reload();
    })
    .catch(error => {
        throw new Error(`Ha ocurrido un error: ${error}`);
    });    
};


