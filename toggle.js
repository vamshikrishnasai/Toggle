let child = document.querySelector(".child1");
let toggle=document.querySelector(".toggle");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let isToggled = false; 

child.addEventListener("click", () => {
    isToggled = !isToggled; 

    if (isToggled) {
        child.style.marginLeft = "30px";
        h1.style.color="white";
        body.style.backgroundColor = "black";
        
    } else {
        child.style.marginLeft = "0px";
        h1.style.color="black";
        body.style.backgroundColor = "white"; 

    }
});
