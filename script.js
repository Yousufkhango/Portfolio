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

let about = document.querySelector(".about")
let projects = document.querySelector(".projects")
let aboutbtn = document.querySelector(".aboutbtn")
let projectsbtn = document.querySelectorAll(".projectsbtn")
projectsbtn.forEach(projectsbtn => {
    projectsbtn.addEventListener("click", () => {
        about.style.display="none"
        aboutbtn.classList.remove("active")
        projectsbtn.classList.add("active")
        projects.style.display="flex"
    })
});

aboutbtn.addEventListener("click", () => {

    projects.style.display="none"
    projectsbtn.forEach(projectsbtn => {
        projectsbtn.classList.remove("active")
    });
    about.style.display="flex"
    aboutbtn.classList.add("active")
})