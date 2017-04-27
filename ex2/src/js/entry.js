var hello = require('./component.js');
//css loader
require('../css/style.css');
//sass loader
require('../css/style.scss');


document.getElementById("hello").innerHTML=hello;