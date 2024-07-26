
// ------Navigation Bar Start---------
document.querySelector(".pages i").addEventListener("click",function(){
    document.querySelector(".menu").style.display = "flex";
    document.querySelector(".pages i").style.display="none";
})

document.querySelector(".menu i").addEventListener("click",function(){
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".pages i").style.display="block";
})
// ------Navigation Bar End----------

// ------Cursor Animation---------
var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");


main.addEventListener("mousemove",function(event){
    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        duration:0.3,
    })
})
// ------Cursor Animation End------

var tl = gsap.timeline();

tl.from(".title",{
    opacity:0,
    x:-100,
    duration:0.4
})
tl.from(".pages a",{
    opacity:0,
    y:-100,
    duration:0.4,
    stagger:0.2
},"-=1")
tl.from(".pages button",{
    opacity:0,
    y:-100,
    duration:0.4,
    stagger:0.2
})
tl.from(".intro-image img",{
    x:-100,
    duration:0.3,
    opacity:0
})
tl.from(".intro-title h1",{
    x:100,
    opacity:0,
    duration:0.4
},"=-0.4")
tl.from(".intro-title p",{
    x:100,
    opacity:0,
    duration:0.4
})

tl.from(".section1 .line",{
    x:1600,
    duration:0.5
})

tl.from(".courses .container",{
    y:-100,
    opacity:0,
    duration:0.4
})
tl.from(".course-title",{
    opacity:0,
    duration:0.2
})
tl.from(".year",{
    opacity:0,
    y:50,
    duration:0.4,
    stagger:0.1
})