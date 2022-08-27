import hamburgerMenu from "./menu_hamburger.js";
import {digitalClock, alarm} from "./clock.js";
import {shortCuts}from "./keyboard.js"
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#activate-clock", "#deactivated-clock");
    alarm("../assets/alarma_2.mp3","#activate-alarm", "#deactivated-alarm")
});

d.addEventListener("keydown", e =>{
    shortCuts(e);
})