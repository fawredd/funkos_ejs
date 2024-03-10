/* Configuro manejo de error 404 */

export const error404 = ((req, res, next) => {
    res.status(404).render('./error404.ejs', {
        title: 'Error 404'
    });
    return next();
});