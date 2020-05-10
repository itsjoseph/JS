const express = require('express');
const router = express.Router();//importamos router para las rutas y cambiamos de app a router

router.get('/', (req, res) => {
    res.render('index.html',{ title:'Firs Website' });
});


router.get('/contact', (req, res) => {
    res.render('contact.html',{ title:'Contact Page' });
});

module.exports = router;


