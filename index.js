const main = document.querySelector(".main-img")
const thumbnails = document.querySelectorAll("li img")
const chevLeft = document.querySelector(".chevron-left")
const chevRight = document.querySelector(".chevron-right")

let currentImage = 5

thumbnails.forEach((thumbnail, index) =>{
  
  thumbnail.addEventListener('click', (e)=>{

    removeSelection()
    
    currentImage = index+1
    main.src = `./images/${currentImage}.jpg`

    addSelection(thumbnail)
  })  
})

chevRight.addEventListener('click', ()=>{
  currentImage = currentImage + 1
  if (currentImage > 5){
    currentImage = 1
  }
  removeSelection()
  main.src = `./images/${currentImage}.jpg`

  const targetElement = thumbnails[currentImage-1]

  addSelection(targetElement)
})

chevLeft.addEventListener('click', ()=>{
  currentImage = currentImage - 1
  if (currentImage < 1){
    currentImage = 5
  }
  removeSelection()
  main.src = `./images/${currentImage}.jpg`

  const targetElement = thumbnails[currentImage-1]

  addSelection(targetElement)
})

function removeSelection (){
  thumbnails.forEach((thumbnail)=>{
    thumbnail.classList.remove("selected-thumbnail")
  })
}

function addSelection (element){
  element.classList.add("selected-thumbnail")
}
