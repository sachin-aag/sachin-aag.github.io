const fetch = require('node-fetch');

fetch('https://musicscapes.herokuapp.com/musicScape')
    .then(res => res.text())
    .then(text => console.log(text));
    //https://musicscapes.herokuapp.com/musicScape