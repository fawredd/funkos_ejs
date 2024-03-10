import { findAll, findOne } from "../models/productModel.js";

/* Configuro capa de controladores para shopRoutes.js */
export const shop = async (req, res) => {

    const query = req.query;
    const items = await findAll();

    let filteredItems = items;

    if (query.search) {
        filteredItems = filteredItems.filter(item => {
            return item.productName.replace(/ /g, "").toLowerCase().includes(query.search.toLowerCase()) 
            || item.licence.licenceName.replace(/ /g, "").toLowerCase().includes(query.search.toLowerCase())
        });
    };

    if ((query.cat) && (query.cat != 'todos')) {
        filteredItems = filteredItems.filter(item => {
            return item.category.categoryId.includes(query.cat)
        });
    };

    if (query.order) {
        switch (query.order) {
            case 'maxprice':
                filteredItems.sort((a, b) => b.price - a.price);
                break;
            case 'minprice':
                filteredItems.sort((a, b) => a.price - b.price);
                break;
            case 'az':
                filteredItems.sort((a, b) => a.productName.localeCompare(b.productName));
                break;
            case 'za':
                filteredItems.sort((a, b) => b.productName.localeCompare(a.productName));
                break;
            default:
                break;
        };
    };

    const minPrice = isNaN(parseInt(query.min)) ? 0 : parseInt(query.min);
    const maxPrice = isNaN(parseInt(query.max)) ? Number.MAX_VALUE : parseInt(query.max);

    if ((query.min) || (query.max)) {
        filteredItems = filteredItems.filter( item => {
            return item.price >= minPrice && item.price <= maxPrice;
        });
    };

    res.render('../views/shop/shop.ejs', {
        title: 'Shop',
        filteredItems
    });
};

export const item = async (req, res) => {
    const { id } = req.params; 
    const items = await findAll();
    const item = await findOne({id: Number(id)})

    const sort = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    const getSort = (array, size) => {
       const sortedArray = sort(array);
       return sortedArray.slice(0, size);
    };
    
    const itemsRelacionados = items.filter(product => {
        return product.licence.licenceName.includes(item.licence.licenceName) && product.id != Number(id);
    });

    const itemsList = getSort(itemsRelacionados, 12)

    res.render('../views/shop/item.ejs', {
        title: 'Item',
        itemsList,
        item
    });
};

export const addItem = async (req, res) => {
    const { id } = req.params;
    const item = await findOne({id: Number(id)});
    const { quantity } = req.body;

    if (!req.session.cartItems) {
        req.session.cartItems = [];
    };

    const itemExists = req.session.cartItems.find(element => element.id === item.id);

    if (itemExists) {
        itemExists.quantity = Number(itemExists.quantity) + Number(quantity);
    } else {
        req.session.cartItems.push({ id: item.id, quantity: Number(quantity) });
    };

    res.redirect('/shop');
};

export const cart = async (req, res) => {

    const items = await findAll();

    res.render('../views/shop/cart.ejs', {
        title: 'Carrito',
        items: items
    });
};

export const deleteItemCart = (req, res) => {

    const { id } = req.params;

    const product = req.session.cartItems.findIndex(element => element.id == id);

    if (product != -1) {
        req.session.cartItems.splice(product, 1)
    };

    res.redirect('/shop/cart');

};

export const purchaseCart = (req, res) => {

    req.session.cartItems = [];
    res.locals.cartItems = req.session.cartItems;

    res.render('./shop/purchase.ejs', {
        title: 'Comprar'
    });
};