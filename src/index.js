// index.js
import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
import src from "./logi.png";
import './style.css';

const homeBtn = document.getElementById('1home');
const menuBtn = document.getElementById('2menu');
const aboutBtn = document.getElementById('3about');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);

// Load home content by default
loadHome();