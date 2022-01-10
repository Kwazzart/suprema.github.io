const block1 = document.querySelector(".block-1")
const title = document.querySelector(".title")
const block2 = document.querySelector(".block-2") 
const allList = block2.children[0]
const li1 = allList.children[0]
const li2 = allList.children[1]
const li3 = allList.children[2]



changeStyle = (element, color="red", text) => {
    element.style.backgroundColor = color
}
changeContent = (e, content) => {
    e.textContent = content
}

setTimeout(() => {
    block1.innerHTML = "<h2>Теперь это h3</h2>"
}, 500);

const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandParent.addEventListener("mouseover", () => {
    grandParent.style.backgroundColor = "black"
})
parent.addEventListener("mouseover", () => {
    parent.style.backgroundColor = "yellow"
})
child.addEventListener("mouseover", () => {
    child.style.backgroundColor = "red"
})

grandParent.addEventListener("mouseout", () => {
    grandParent.style.backgroundColor = "blue"
})
parent.addEventListener("mouseout", () => {
    parent.style.backgroundColor = "red"
})
child.addEventListener("mouseout", () => {
    child.style.backgroundColor = "pink"
})

const newDiv = document.createElement("div")
newDiv.style.width = "25px"
newDiv.style.height = "25px"
newDiv.style.backgroundColor = "pink"
child.append(newDiv)

const checkbox = document.getElementById("one")
const checkbox2 = document.getElementById("one2")
fun1 = () => {
if (checkbox.checked) {
    console.log("true")
}else{
    console.log("false")
}
}
fun2 = () => {
    console.log("Click")
}
checkbox2.addEventListener("onchange", () => {
    if (checkbox2.checked) {
        console.log("Ты решил свою первую проблему (1)")
    }
    else{
        console.log("Молодец!(0)")
    }
})


funButtons = () => {
    let radi = document.getElementsByName("r1")
    for (let i = 0; i < radi.length; i++) {
        const el = array[i]
        console.log(el)
    }
}

funButtons = () => {
    var radi = document.getElementsByName("r1")
    for (let i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
         console.log(radi[i].value)   
        }
    }   
}
const smartButton = document.getElementById("smart-button")


let clickCount = 0
let addSpeed = 0
addValue = (startSpeed) => {
    smartButton.value = parseInt(smartButton.value) + startSpeed + addSpeed
    smartButton.textContent = smartButton.value
    if (clickCount%10 === 0 && clickCount != 0) {
        addSpeed += 1
    }

    clickCount += 1
}
addAllBorder = () => {
    allElements = document.body.children
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i]
        element.style.border = "3px solid white"
    }
}
setTimeout(() => {
    addAllBorder()
}, 1000);

selectedIndexGet = () => {
    let sel = document.getElementById("mySelect").selectedIndex
    console.log(sel + 1 + " " + document.getElementById("mySelect").options[sel].textContent)
}

let ra1 = document.getElementById("ra1")
printRangeValue = () => {
    console.log(ra1.value)
}
let ra2 = document.getElementById("ra2")
ra2.addEventListener("mouseup", () => {
    console.log(ra2.value)
})