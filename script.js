const card = document.querySelectorAll(".card")
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const variable = document.querySelector(".variable")

// кнопки
const scss = document.querySelector(".style")
const js = document.querySelector(".script")

function removeClass(){
    card.forEach((i)=>{
        i.classList.remove("active")
    })
}

card.forEach((i)=>{

    i.addEventListener("click",()=>{
        removeClass()
        i.classList.add("active")
    })

})

scss.addEventListener("click",()=>{
    first.style.display="flex"
    variable.textContent = "Уверен?"
    second.style.display="none"
})

js.addEventListener("click",()=>{
    variable.textContent = "Уверен?"
    first.style.display="none"
    second.style.display="flex"
})

