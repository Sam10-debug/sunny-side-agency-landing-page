const hamburger= document.querySelector('.hamburger')
const textwrap1= document.querySelector('#textwrap1')
const textwrap2= document.querySelector('#textwrap2')
const textwrap3= document.querySelector('#textwrap3')
const textwrap4= document.querySelector('#textwrap4')
const nobody= document.querySelector('.nobody')
const arrow= document.querySelector(".arrow")
let i=0
const func=()=>{
    nobody.classList.toggle("active")
    arrow.classList.toggle("active")
    i=i+1
    if (i%2==0){
        textwrap1.classList.remove("active")
        textwrap2.classList.remove("active")
        textwrap3.classList.remove("active")
        textwrap4.classList.remove("active")
    }
}
const func1=()=>{
    textwrap1.classList.toggle("active")
    textwrap2.classList.remove("active")
    textwrap3.classList.remove("active")
    textwrap4.classList.remove("active")
}
const func2=()=>{
    textwrap2.classList.toggle("active")
    textwrap1.classList.remove("active")
    textwrap3.classList.remove("active")
    textwrap4.classList.remove("active")
}
const func3=()=>{
    textwrap3.classList.toggle("active")
    textwrap2.classList.remove("active")
    textwrap1.classList.remove("active")
    textwrap4.classList.remove("active")
}
const func4=()=>{
    textwrap4.classList.toggle("active")
    textwrap2.classList.remove("active")
    textwrap3.classList.remove("active")
    textwrap1.classList.remove("active")
}
hamburger.addEventListener('click',func)
textwrap1.addEventListener("click",func1)
textwrap2.addEventListener("click",func2)
textwrap3.addEventListener("click",func3)
textwrap4.addEventListener("click",func4)