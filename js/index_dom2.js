import hamburgerMenu from "./menu_hamburger.js";
import {digitalClock, alarm} from "./clock.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#activate-clock", "#deactivated-clock");
});
 