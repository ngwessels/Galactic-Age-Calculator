import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { Age } from './js/galacticAge.js';


// This js file contains all the front-end logic. It will call upon other js files that contain back-end logic


$(document).ready(function() {
  $(form).submit(function(event) {
    let age = new Age();
    debugger;
    let galacticAge = age.main();
    event.preventDefault();
  });
});
