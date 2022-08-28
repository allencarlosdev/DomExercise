import hamburgerMenu from "./menu_hamburger.js";
import {digitalClock, alarm} from "./clock.js";
import {moveBall, shortCuts}from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopButton from "./btn_scroll.js";
import darkTheme from "./dark_theme.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#activate-clock", "#deactivated-clock");
    alarm("../assets/alarma_2.mp3","#activate-alarm", "#deactivated-alarm")
    countdown("countdown", "2022-10-24 00:00:00", " Happy Birthday Carlos Allen");
    scrollTopButton(".scroll-top-btn");
    darkTheme(".dark-theme-btn", "dark-mode");
});

d.addEventListener("keydown", e =>{
    shortCuts(e);
    moveBall(e,".ball", ".stage")
})