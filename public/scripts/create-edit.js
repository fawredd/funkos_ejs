const precio = document.querySelector('#precio');
const stock = document.querySelector('#stock');
const descuento = document.querySelector('#descuento');

function validation () {
    this.value = this.value.replace(/^0+/, '');
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value === '') {
        this.value = 0;
    };
};


precio.addEventListener('input', validation);
stock.addEventListener('input', validation);
descuento.addEventListener('input', validation);
