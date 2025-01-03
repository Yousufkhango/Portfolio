let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
theme1.addEventListener("click", () => {
    theme1.style.display = "none"
    theme2.style.display = "inline"
    let dark = document.querySelectorAll(".dark")
    dark.forEach(dark => {
        dark.classList.add("light")
        dark.classList.remove("dark")
    });
    document.querySelector(".navicon").classList.add("filter")
})

theme2.addEventListener("click", () => {
    theme2.style.display = "none"
    theme1.style.display = "inline"
    let light = document.querySelectorAll(".light")
    light.forEach(light => {
        light.classList.add("dark")
        light.classList.remove("light")
    });
    document.querySelector(".navicon").classList.remove("filter")
})

let first_protion = document.querySelector(".first_protion")
let second_portion = document.querySelector(".second_portion")
let firstbtn = document.querySelector(".firstbtn")
let secondbtn = document.querySelectorAll(".secondbtn")
secondbtn.forEach(secondbtn => {
    secondbtn.addEventListener("click", () => {
        first_protion.style.display="none"
        firstbtn.classList.remove("active")
        document.getElementById('navSecondBtn').classList.add("active")
        second_portion.style.display="flex"
    })
});

firstbtn.addEventListener("click", () => {

    second_portion.style.display="none"
    secondbtn.forEach(secondbtn => {
        secondbtn.classList.remove("active")
    });
    first_protion.style.display="flex"
    firstbtn.classList.add("active")
})