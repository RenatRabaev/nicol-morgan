// code section for responsive navigation menu

const menuBtn = document.querySelector(".menu_btn") 
const navigation = document.querySelector(".navigation") 


menuBtn.addEventListener("click",()=> {
  menuBtn.classList.toggle("active")
  navigation.classList.toggle("active")
});

// code section for video slider navigation

const bTns = document.querySelectorAll(".nav_btn")
const slideS = document.querySelectorAll(".video_slide")
const contentS = document.querySelectorAll(".content")

var sliderNav = function(manual){
  // עבור כפטורים למטה
  bTns.forEach((btn) => {
    btn.classList.remove("active")
  })
  bTns[manual].classList.add("active")
  
// עבוא מעבר בין סרטונים
  slideS.forEach((slide) => {
    slide.classList.remove("active")
  })
  slideS[manual].classList.add("active")

// עבור תאור בכל מעבר 
  contentS.forEach((content) => {
    content.classList.remove("active")
  })
  contentS[manual].classList.add("active")
}

bTns.forEach((btn,i) => {
  btn.addEventListener("click" , () => {
    sliderNav(i)
  })
})


// navbar
const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".navigation_items")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})