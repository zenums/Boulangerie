const Nav = document.querySelector(".nav")
const menu = document.querySelector(".logo-burger")
const itemBurger = document.querySelectorAll(".item-burger")

menu.addEventListener('click',()=>{
    Nav.classList.toggle("active")
    if(Nav.classList.contains("active")){
        itemBurger.forEach((item)=>{
            item.classList.add('active')
        })
    }
    else{
        itemBurger.forEach((item)=>{
            item.classList.remove('active')
        })
    }
})

const allLinks = document.querySelectorAll('.item-nav')


allLinks.forEach(e=>{
    e.addEventListener('click',()=> Nav.classList.toggle('active'))
})


// animation

const ratio = 0.15;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
}


const animationScroll = function(entries,observer){
    entries.forEach((e)=>{
        if(e.intersectionRatio > ratio){
            e.target.classList.add('reveal-visible')
            observer.unobserve(e.target)
        }
    })
}

const observer = new IntersectionObserver(animationScroll,options)
const anim = document.querySelectorAll('.reveal')

anim.forEach((a) => {
    observer.observe(a)
})
