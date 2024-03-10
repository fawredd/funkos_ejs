import cookieSession from "cookie-session";
import dotenv from 'dotenv';

dotenv.config();

export const initSession = cookieSession({
    name: 'session',
    secret: process.env.SECRET_SESSION,
    maxAge: 10 * 60 * 1000
});

export const userIsLogged = ((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    return next();
  });

export const adminIsLogged = ((req, res, next) => {
    res.locals.isLoggedAdmin = req.session.isLoggedAdmin;
    return next();
});

export const cartItems = ((req, res, next) => {
    res.locals.cartItems = req.session.cartItems;
    return next();
})