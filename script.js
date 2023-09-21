let now = new Date()
let year = now.getFullYear();

document.getElementById("year").textContent += year   

let form = document.querySelector(".form")

form.addEventListener("focus", (evt) => {
    evt.target.style.backgroundColor = "lightblue"
},true)


form.addEventListener("blur", (evt) => {
    evt.target.style.backgroundColor = ""
},true)


let btns = document.querySelector('.scroll-to-top')

btns.addEventListener('click', () => {
    window.scrollTo({top:0,behavior: 'smooth'})
})

// neumophism animation control
// 1

document.querySelector('.sub-cont').addEventListener('mouseenter',() => {
    document.querySelector('.contet-txt').style.height = "100%"
})

document.querySelector('.sub-cont').addEventListener('mouseleave',() => {
    document.querySelector('.contet-txt').style.height = "0"
})

// 2
document.querySelector('.sub-cont1').addEventListener('mouseenter',() => {
    document.querySelector('.contet-txt-1').style.height = "100%"
})

document.querySelector('.sub-cont1').addEventListener('mouseleave',() => {
    document.querySelector('.contet-txt-1').style.height = "0"
})



// 3
document.querySelector('.sub-cont2').addEventListener('mouseenter',() => {
    document.querySelector('.contet-txt-2').style.height = "100%"
})

document.querySelector('.sub-cont2').addEventListener('mouseleave',() => {
    document.querySelector('.contet-txt-2').style.height = "0"
})

// toggle-mode 

let toggleMode =document.querySelector('#toggle-Mode')
let toggleLabel = document.querySelector('#toggle-Label')

toggleMode.addEventListener('change',() => {
    darkModestyling()
    document.querySelector(".hero").style.backgroundColor = "#1a1a25"
    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        toggleLabel.textContent = 'Light Modee'
    document.querySelector(".hero").style.backgroundColor = "#1a1a25"

    }else {
        toggleLabel.textContent = 'Dark Mode'
    }
})


if(window.matchMedia('(prefers-color-schem:light)').matches){
    document.body.classList.add('dark-mode')
    toggleLabel.textContent = 'Light Mode'
}

function darkModestyling(){
    let divs = document.querySelectorAll(".dark-divs");
    let i;
    for(i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = "#1a1a25"
    }

    let daktTxt = document.querySelectorAll(".dark-txt");
    let j;
    for(i = 0; j < daktTxt.length; j++){
        daktTxt[j].style.color = "white"
    }

    if(toggleMode.checked == false){
        
        let divs = document.querySelectorAll(".dark-divs");
        let i;
        for(i = 0; i < divs.length; i++){
            divs[i].style.backgroundColor = ""
        }
    
        let daktTxt = document.querySelectorAll(".dark-txt");
        let j;
        for(i = 0; j < daktTxt.length; j++){
            daktTxt[j].style.color = ""
        }
    }

    
}


 