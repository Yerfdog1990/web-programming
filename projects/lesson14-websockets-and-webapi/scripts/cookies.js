const express = require('express');
const {cookies} = require("express/lib/request");
const app = express();

app.get('/setcookie', (req, res) => {
    res.cookie('secureServerCookie', 'ServerJohnDoe', {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    });

    res.send('Secure server cookie set');
});

app.get('/getcookie', (req, res) => {
    const cookie = req.cookies.secureServerCookie;
    res.send(`Cookie value: ${cookie}`);
});

app.listen(3000);