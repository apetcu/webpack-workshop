import ContentChanger from './js/component.js';

import "./css/style.css";

new ContentChanger('hello', 'hey this is a test bla baala. Woohoo!');

if (module.hot) {
  module.hot.accept()
}

/*
add module hot here
remove css extract

 */