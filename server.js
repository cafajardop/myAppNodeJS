const express = require('express');  /* npm install express --save */
const app = express(); /* nodemon server.js */

// Definir los parciales
const hbs = require('hbs'); /* npm install hbs --save */
require('./hbs/helpers')

const port = process.env.PORT || 3000;

//Renderizar las paginas publicas html
app.use(express.static(__dirname + '/public')); /* nodemon server -e js,hbs,html,css */

// Renderizar parciales
hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'carlos fajardo',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})

/* npm run nodemon */

