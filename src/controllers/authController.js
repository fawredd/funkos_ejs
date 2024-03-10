import { createUser } from "../models/userModel.js";
import { validationResult } from "express-validator";

/* Configuro capa de controladores para authRoutes.js */

export const login = (req, res) => {
    res.render('../views/auth/login.ejs', {
        title: 'Ingresar',
    });
};

export const doLogin = async (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.render('../views/auth/login.ejs', {
            title: 'Ingresar',
            errors: errors.array()
        });
    }

    if (req.body.email === 'admin@fawfunk.com') {
        req.session.isLoggedAdmin = true;
        return res.redirect('/admin');
    } else {
        req.session.isLogged = true;
        return res.redirect('/');
    }
};

export const register = (req, res) => {
    res.render('../views/auth/register.ejs', {
        title: 'Registrarse',
        body: {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }
    });
};

export const doRegister = async (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.render('../views/auth/register.ejs', {
            title: 'Registrarse',
            errors: errors.array(),
            body: {
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            }
        });
    }

    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
     }

     console.log("PASO POR doRegister")
     await createUser(user)

     res.redirect('/home');
};

export const logout = (req, res) => {
    req.session.isLogged = false;
    req.session.isLoggedAdmin = false;
    return res.redirect('/');
};