import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*Load env variables*/
import dotenv from 'dotenv';
dotenv.config();

/* Declare port */
const PORT = process.env.PORT;

/* Start express */
import express from 'express';
const app = express();

/* Configure dinamic views in ejs */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

/* Declare static folder */
app.use(express.static(path.join(__dirname, "/public")));

/* POST data */
app.use(express.urlencoded());
app.use(express.json());

/* methodOverride PUT & DELETE */
import methodOverride from 'method-override';
app.use(methodOverride('_method'));

/* Configure Sessions */
import { initSession , userIsLogged , adminIsLogged, cartItems } from './src/middlewares/session.js';
app.use(initSession);
app.use(userIsLogged);
app.use(adminIsLogged);
app.use(cartItems);

/* Allows settion session expire time */
app.use(function (req, res, next) {
    req.session.nowInMinutes = Math.floor(Date.now() / 30e3)
    return next()
})

/* Set routes */
import { mainRouter } from './src/routes/mainRoutes.js';
import { shopRouter } from './src/routes/shopRoutes.js';
import { adminRouter } from './src/routes/adminRoutes.js';
import { authRouter } from './src/routes/authRoutes.js';

app.use("/", mainRouter);
app.use("/shop", shopRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

/* Error 404 */
import { error404 } from './src/middlewares/errorHandle.js';

app.use(error404);

/* Start server */
app.listen(PORT, () => console.log(`Servidor corriendo en  http://localhost:${PORT}`));