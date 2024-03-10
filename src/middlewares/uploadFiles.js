import path from 'path';
import { fileURLToPath } from 'url';

/* A través de fileURLToPath e import.meta.url genero la manera de
usar __dirname como se hace con CommonJS ya que ES Modules no posee
esa función */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Importo multer para la subida de archivos */

import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img/products')),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

export const upload = multer({storage});
