let menu_icon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu");

menu_icon.addEventListener("click", () => {
    if(menu.className === "hidden"){
        menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")
    }
})