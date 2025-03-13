gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: ".main",
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: ".main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".purple",
    scroller: ".main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  }
});

tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  .from(
    ".line-3",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  )
  .to(".purple", { backgroundColor: "#28a92b" }, 0);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


let bg = document.querySelector(".loader")

setTimeout(function(){
    bg.style.top = "-100%"
},5200)

gsap.from(".loader h1",{
    opacity : 0,
    duration : 3,
    ease: "expo.out",
    scale : 0.5
})

gsap.from("nav li",{
    opacity : 0,
    duration : 1,
    y : "50%",
    delay : 6,
    stagger : 0.3,
    ease: 'power2.inOut'
})

gsap.from(".para",{
    opacity : 0,
    duration : 1.3,
    delay : 5.8,
    y : "-50%"
})

gsap.from(".nav-left p",{
    opacity:0,
    duration:1,
    delay : 5.5,
    ease: 'power2.inOut',
    y : "-50%"
})

gsap.to(".hero #reveal h1", {
    transform: "translateY(0)",
    duration : 2.5,
    ease: "power2.inOut",
    delay : 5.8,
    stagger : 0.3})

gsap.to(".hero #svtext h1", {
    transform: "translateY(-5%)",
    duration : 2.5,
    ease: "power2.inOut",
    delay : 5.8,
    stagger : 0.3})

gsap.from(".spline",{
    opacity:0,
    delay : 7   ,
    duration : 3
})

gsap.from(".ri-arrow-down-fill",{
    opacity:0,
    duration:1.5,
    y:"-50%",
    delay:5.5
})

gsap.from(".based p",{
    opacity:0,
    duration:1.5,
    // y:"-50%",
    delay:8
})

gsap.from(".cursor",{
    opacity:0,
    duration:1,
    delay:6
})

let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function(e){
    gsap.to(cursor,{
        x:e.clientX,
        y:e.clientY,
        duration :1,
        ease:"back.out"
    })
})

gsap.from(".loader p",{
    opacity:0,
    y:"50%",
    duration:3,
    delay:1,
    ease: "power2.inOut"
})

let spline = document.querySelector(".spline")
document.addEventListener("keydown", function(e){

    if(e.key === "Tab" ){
        console.log("tab pressed");
        spline.style.display = "none"
        sum++
    }
   
   
})

gsap.to("#pg-2-svg path",{
    duration : 6,
    delay:1,
    fill:"white",
    ease: "power2.inOut",
    strokeDashoffset: 0,
    scrollTrigger:{
        trigger : ".page-2",
        scroller : ".main"
    }
})

gsap.from(".about-bottom .left p",{
    opacity:0,
    duration:2,
    y:"50%",
    delay:1,
    scrollTrigger:{
        trigger : ".page-2",
        scroller : ".main"
    }
})

gsap.from(".about-bottom .left #devansh",{
    opacity:0,
    duration:3,
    y:"-100%",
    delay:2.5,
    scrollTrigger:{
        trigger : ".page-2",
        scroller : ".main"
    }
})

gsap.to(".page-3 h2",{
  transform:"translateX(-88%)",
  scrollTrigger:{
    trigger : ".page-3",
    scroller : ".main",
    start : "top 0%",
    end: "top -100%",
    scrub:5,
    pin:true
  }
})

let noCursor = document.querySelectorAll(".page-4 .project")
noCursor.forEach(function(e){
  e.addEventListener("mouseenter", function(){
  cursor.style.display = "none"
})
})

noCursor.forEach(function(e){
  e.addEventListener("mouseleave", function(){
  cursor.style.display = "block"
})
})

gsap.to("#pg-4-svg path",{
  duration : 6,
  delay:1,
  fill:"white",
  ease: "power2.inOut",
  strokeDashoffset: 0,
  scrollTrigger:{
      trigger : ".page-4",
      scroller : ".main"
  }
})

let pros = document.querySelector(".prosur")
function cardHover (){
    document.querySelectorAll(".project")
    .forEach(function(project){
        let showingImage;
        project.addEventListener("mousemove", function(e){
            pros.children[e.target.dataset.devansh].style.opacity = 1
            showingImage=e.target
            pros.children[e.target.dataset.devansh].style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
            document.querySelector(".page-4").style.backgroundColor = showingImage.dataset.color
        showingImage.style.filter = "grayscale(1)"
    })

        project.addEventListener("mouseleave", function(e){
           
            pros.children[showingImage.dataset.devansh].style.opacity = 0
            pros.children[e.target.dataset.devansh].style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
            showingImage.style.filter = "grayscale(0)"
            document.querySelector(".page-4").style.backgroundColor = '#151515'
        })
    })
}

cardHover()