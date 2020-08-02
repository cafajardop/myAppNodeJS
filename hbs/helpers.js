const hbs = require('hbs');
// Helpers año
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
// Helper Capitalizar
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });

    return palabras.join(' ');

});
