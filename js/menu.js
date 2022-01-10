nav = document.getElementById("nav")

closeMenu = () => {
    var subm = document.getElementsByClassName("submenu")
    for (let i = 0; i < subm.length; i++) {
        subm[i].style.display = "none"
    }
}

nav.addEventListener("mouseover", (e) => {
    var target = e.target
    if (target.className == "menu-item") {
        var subs = target.children
        closeMenu()
        subs[0].style.display = "block"
    }
})

document.addEventListener("mouseover", (e) => {
    var target = e.target
    if (target.className != "menu-item" && target.className != "submenu") {
        closeMenu()
    }
})