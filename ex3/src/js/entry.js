import { hello, helloJQuery } from './component.js';
import $ from 'jquery';

import "../css/style.css";


document.getElementById("hello").innerHTML=hello;

$('#helloJquery').html(helloJQuery)