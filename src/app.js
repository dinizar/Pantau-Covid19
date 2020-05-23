import "regenerator-runtime";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './styles/style.css';
import webpackLogo from './assets/covid-19.png';

document.querySelector('#logo').src = webpackLogo;
 
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function(){
    $("#c").click(function(){
      $("#a").show(); 
      $("#b").hide();
      $("#c").addClass("active");
      $("#d").removeClass("active");
    });
  });
  
  $(document).ready(function(){
    $("#d").click(function(){
      $("#a").hide();
      $("#b").show(); 
      $("#d").addClass("active");
      $("#c").removeClass("active"); 
    });
  });

import main from "./script/main.js"; 
main();
