const d =document;
export function shortCuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`Ctrl:${e.ctrlKey}`);
    console.log(`Alt:${e.altKey}`);
    console.log(`Shift:${e.shiftKey}`);
    console.log(e);

    if(e.key === "a" && e.altKey){
        alert("You have launched an alert with the keyboard");
    }

    if(e.key === "c" && e.altKey){
        confirm("You have launched a confirm with the keyboard");
    }

    if(e.key === "p" && e.altKey){
        prompt("You have launched a propmt with the keyboard");
    }
}
