const body=document.querySelector('body')
const header=document.querySelector('header')
window.addEventListener("scroll",(e)=>{
header.classList.toggle("sticky_header", window.scrollY>0)
})

