import { findAll } from "../models/productModel.js";
import { licences } from "../models/licenceModel.js";

/* Configuro capa de controladores para mainRoutes.js */
export const home = async (req, res) => {
    const items = await findAll();
    const licence = await licences();    
  
    const sort = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const getSort = (array, size) => {
       const sortedArray = sort(array);
       return sortedArray.slice(0, size);
    }

    const licenceList = getSort(licence, 3);
    const itemsList = getSort(items, 12)
  
    res.render('../views/index.ejs', {
        title: 'Home',
        itemsList,
        licenceList
    });
};

export const contact = (req, res) => { 
    res.render('../views/contact.ejs', {
        title: 'Contacto'
    });
};