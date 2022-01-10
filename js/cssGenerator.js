const iBlock = document.getElementById("inter-block")
iBlock.style.width = "260px"
iBlock.style.height = "140px"
iBlock.style.backgroundColor = "blue"
iBlock.style.margin = "40px" 
iBlock.style.display = "inline-block"

const contrl1 = document.getElementById("contrl1")
const contrl2 = document.getElementById("contrl2")
const contrl3 = document.getElementById("contrl3")
const contrl4 = document.getElementById("contrl4")

changeBorderRadius = () => {
      iBlock.style.borderTopLeftRadius = contrl1.value + "%" 
      iBlock.style.borderTopRightRadius = contrl2.value + "%" 
      iBlock.style.borderBottomRightRadius = contrl3.value + "%" 
      iBlock.style.borderBottomLeftRadius = contrl4.value + "%" 
}