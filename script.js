function starting(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
starting()

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });

function page1Heading() {
    var words = ["Blossom with Nature's Elegance.","Petals Paint Life's Canvas.",
    "Nature's Artistry, Your Expression.",
    "Blooms Brighten Every Moment.",
    "Where Flowers Speak Love's Language."];
    var index = 0; // Declare index outside the function

    function displayNextWord() {
        if (index < words.length) {
            var text = words[index];
            var splittedText = text.split("");

            var clutter = "";
            splittedText.forEach(function(elem) {
                clutter += `<span>${elem}</span>`;
            });

            var h3Text = document.querySelector('.intro h3');
            h3Text.innerHTML = clutter;

            gsap.to(".intro h3 span", {
                display: "initial",
                duration: 3,
                stagger: 0.2,
                delay: 1,
                onComplete: function() {
                    // Call displayNextWord again after animation completes
                    setTimeout(displayNextWord, 1000);
                }
            });

            index++;
        } else {
            index = 0; // Reset index when it reaches the end of the array
    displayNextWord();

        }
    }
    displayNextWord();

}
page1Heading();

function page2Animation(){
  gsap.from("#page2 h1",{
    y:200,
    x:10,
    duration:1,
    stagger:.1,
    opacity:0,
    // opacity:0,
    scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      scrub:true,
      // start:"top 70%",
      // end:"top 0vh",
      // markers:true
    }
  })
}
page2Animation()

function skill1(){
   var tl = gsap.timeline({
      repeat:-1,
      scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
    })
    
    tl.to(".skill1",{
      x:"45vw",
      y:"35vh",
      duration:1,
      zIndex:9999,
      transform:"scale(2)"
    })
    
    tl.to(".skill1",{
      x:"45vw",
      y:"35vh",
      duration:1,
      zIndex:1,
      transform:"scale(1)"
    })
    
    tl.to(".skill1",{
      x:"90vw",
      y:"0vh",
      duration:1,
    })
    
    tl.to(".skill1",{
      x:"70vw",
      y:"80vh",
      duration:1,
    })
    
    tl.to(".skill1",{
      x:"45vw",
      y:"0vh",
      duration:1,
    })
    
    tl.to(".skill1",{
      x:"0vw",
      y:"80vh",
      duration:1,
    })
    tl.to(".skill1",{
      x:"20vw",
      y:"0vh",
      duration:1,
    })

    tl.to(".skill1",{
      x:"45vw",
      y:"80vh",
      duration:1,
    })

    tl.to(".skill1",{
      x:"70vw",
      y:"0vh",
      duration:1,
    })

    tl.to(".skill1",{
      x:"90vw",
      y:"35vh",
      duration:1,
    })

    tl.to(".skill1",{
      x:"45vw",
      y:"0vh",
      duration:1,
    })

    tl.to(".skill1",{
      x:"20vw",
      y:"80vh",
      duration:1,
    })

    tl.to(".skill1",{
      x:"0vw",
      y:"35vh",
      duration:1,
    })

}
skill1()

function skill2(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      // markers:true,
      start:"top 30%"
    }
  })

  tl.to(".skill2",{
    x:"45vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill2",{
    x:"70vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill2",{
    x:"90vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill2",{
    x:"45vw",
    y:"0vh",
    duration:1,
    transform:"scale(2)",
    zIndex:9999,
  })

  
  tl.to(".skill2",{
    x:"20vw",
    y:"45vh",
    duration:1,
    transform:"scale(1)",
    zIndex:1,
  })

  tl.to(".skill2",{
    x:"0vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill2",{
    x:"20vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill2",{
    x:"45vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill2",{
    x:"70vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill2",{
    x:"90vw",
    y:"0vh",
    duration:1,
  })
  tl.to(".skill2",{
    x:"70vw",
    y:"45vh",
    duration:1,
  })
  tl.to(".skill2",{
    x:"45vw",
    y:"-35vh",
    duration:1,
  })
  tl.to(".skill2",{
    x:"0vw",
    y:"45vh",
    duration:1,
  })
}
skill2()

function skill3(){
  var tl = gsap.timeline({
    repeat: -1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to(".skill3",{
    x:"0vw",
    y:"80vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"25vw",
    y:"35vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })
  
  tl.to(".skill3",{
    x:"25vw",
    y:"35vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)"
  })
  tl.to(".skill3",{
    x:"50vw",
    y:"80vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"70vw",
    y:"35vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"50vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"25vw",
    y:"80vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"0vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"-20vw",
    y:"35vh",
    duration:1,
  })
 

  tl.to(".skill3",{
    x:"0vw",
    y:"70vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"-20vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"25vw",
    y:"80vh",
    duration:1,
  })

  tl.to(".skill3",{
    x:"70vw",
    y:"0vh",
    duration:1,
  })


}
skill3()

function skill4(){
  var tl = gsap.timeline({
    repeat: -1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to(".skill4",{
    x:"-25vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"-45vw",
    y:"0vh",
    duration:1
  })
 

  tl.to(".skill4",{
    x:"0vw",
    y:"35vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })
  
  tl.to(".skill4",{
    x:"0vw",
    y:"35vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)"
  })

  tl.to(".skill4",{
    x:"-45vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"-25vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"0vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"25vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"45vw",
    y:"35vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"25vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"45vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"0vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill4",{
    x:"-45vw",
    y:"0vh",
    duration:1
  })

}
skill4()

function skill5(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to(".skill5",{
    x:"20vw",
    y:"35vh",
    duration:1,
  })

  tl.to(".skill5",{
    x:"0vw",
    y:"80vh",
    duration:1,
  })
  tl.to(".skill5",{
    x:"-25vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill5",{
    x:"-50vw",
    y:"80vh",
    duration:1,
  })

  tl.to(".skill5",{
    x:"-25vw",
    y:"35vh",
    duration:1,
    transform:"scale(2)",
    zIndex:9999,
  })

  tl.to(".skill5",{
    x:"-25vw",
    y:"35vh",
    duration:1,
    transform:"scale(1)",
    zIndex:1,
  })

  
  tl.to(".skill5",{
    x:"-70vw",
    y:"35vh",
    duration:1,
  })

  tl.to(".skill5",{
    x:"-25vw",
    y:"80vh",
    duration:1,
  })

  tl.to(".skill5",{
    x:"-50vw",
    y:"80vh",
    duration:1,
  })

  tl.to(".skill5",{
    x:"-70vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill5",{
    x:"-25vw",
    y:"80vh",
    duration:1,
  })
  tl.to(".skill5",{
    x:"20vw",
    y:"80vh",
    duration:1,
  })
  tl.to(".skill5",{
    x:"0vw",
    y:"0vh",
    duration:1,
  })
}
skill5()

function skill6(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to(".skill6",{
    x:"-20vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-45vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-70vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-90vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-90vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-45vw",
    y:"35vh",
    duration:1,
    transform:"scale(2)",
    zIndex:9999
  })
  tl.to(".skill6",{
    x:"-45vw",
    y:"35vh",
    duration:1,
    transform:"scale(1)",
    zIndex:1
  })

  tl.to(".skill6",{
    x:"0vw",
    y:"35vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-20vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-45vw",
    y:"0vh",
    duration:1
  })
  tl.to(".skill6",{
    x:"-70vw",
    y:"80vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-90vw",
    y:"35vh",
    duration:1
  })

  tl.to(".skill6",{
    x:"-70vw",
    y:"0vh",
    duration:1
  })
}
skill6()

function skill7(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to('.skill7',{
    x:"20vw",
    y:"-80vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"20vw",
    y:"0vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"45vw",
    y:"-80vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"70vw",
    y:"0vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"90vw",
    y:"-80vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"90vw",
    y:"0vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"45vw",
    y:"-45vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })

  tl.to('.skill7',{
    x:"45vw",
    y:"-45vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)"
  })

  tl.to('.skill7',{
    x:"0vw",
    y:"-45vh",
    duration:1,
  })
  
  tl.to('.skill7',{
    x:"20vw",
    y:"-80vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"0vw",
    y:"0vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"0vw",
    y:"-80vh",
    duration:1,
  })

  tl.to('.skill7',{
    x:"45vw",
    y:"-80vh",
    duration:1,
  })
  
}
skill7()

function skill8(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to(".skill8",{
    x:"-20vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"-20vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"0vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"25vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"50vw",
    y:"-70vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"70vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"70vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"25vw",
    y:"-45vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })

  tl.to(".skill8",{
    x:"25vw",
    y:"-45vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)"
  })

  tl.to(".skill8",{
    x:"0vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"25vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill8",{
    x:"50vw",
    y:"-80vh",
    duration:1
  })
  tl.to(".skill8",{
    x:"70vw",
    y:"0vh",
    duration:1
  })
}
skill8()

function skill9(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })
  tl.to(".skill9",{
    x:"-45vw",
    y:"-80vh",
    duration:1
  })
  tl.to(".skill9",{
    x:"-45vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"0vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"45vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"45vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"0vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"-25vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"-45vw",
    y:"-45vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"0vw",
    y:"-45vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })

  tl.to(".skill9",{
    x:"0vw",
    y:"-45vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)"
  })

  tl.to(".skill9",{
    x:"45vw",
    y:"-45vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"25vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill9",{
    x:"0vw",
    y:"0vh",
    duration:1
  })
}
skill9()

function skill10(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })
  tl.to(".skill10",{
    x:"20vw",
    y:"-80vh",
    duration:1,
  })
  tl.to(".skill10",{
    x:"-25vw",
    y:"-80vh",
    duration:1,
  })
  tl.to(".skill10",{
    x:"-50vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"-70vw",
    y:"-45vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"-50vw",
    y:"-80vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"-70vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"-70vw",
    y:"-80vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"-25vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"20vw",
    y:"-45vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"-25vw",
    y:"-45vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })
  tl.to(".skill10",{
    x:"-25vw",
    y:"-45vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)",
  })

  tl.to(".skill10",{
    x:"-50vw",
    y:"-80vh",
    duration:1,
  })

  tl.to(".skill10",{
    x:"-50vw",
    y:"0vh",
    duration:1,
  })
}
skill10()

function skill11(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to(".skill11",{
    x:"-20vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-20vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-45vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-70vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-70vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-90vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-90vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-70vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-45vw",
    y:"0vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-20vw",
    y:"-80vh",
    duration:1
  })

  tl.to(".skill11",{
    x:"-45vw",
    y:"-45vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })

  tl.to(".skill11",{
    x:"-45vw",
    y:"-45vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)"
  })

  tl.to(".skill11",{
    x:"0vw",
    y:"-45vh",
    duration:1,
  })
}
skill11()

function skill12(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })
  tl.to(".skill12",{
    x:"-20vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"-20vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"0vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"0vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"-45vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"-70vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"-90vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"-45vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill12",{
    x:"0vw",
    y:"45vh",
    duration:1,
  })
  tl.to(".skill12",{
    x:"-20vw",
    y:"-35vh",
    duration:1,
  })
  tl.to(".skill12",{
    x:"-20vw",
    y:"45vh",
    duration:1,
  })
  tl.to(".skill12",{
    x:"-45vw",
    y:"0vh",
    duration:1,
    zIndex:9999,
    transform:"scale(2)"
  })
  tl.to(".skill12",{
    x:"-45vw",
    y:"0vh",
    duration:1,
    zIndex:1,
    transform:"scale(1)"
  })
}
skill12()

function skill13(){
  var tl = gsap.timeline({
    repeat:-1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
      }
  })

  tl.to(".skill13",{
    x:"0vw",
    y:"0vh",
    duration:1,
    transform:"scale(1)",
    zIndex:1
  })

  tl.to(".skill13",{
    x:"-45vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"-25vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"-45vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"-45vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"0vw",
    y:"-35vh",
    duration:1,
  })
  tl.to(".skill13",{
    x:"25vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"45vw",
    y:"0vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"25vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"45vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"-45vw",
    y:"45vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"0vw",
    y:"-35vh",
    duration:1,
  })

  tl.to(".skill13",{
    x:"0vw",
    y:"0vh",
    duration:1,
    transform:"scale(2)",
    zIndex:9999,
  })
}
skill13()

gsap.from(".project1",{
  transform:"scale(.5)",
  scrollTrigger:{
    trigger:".project1",
    scroller:"#main",
    scrub:true,
    end:"top 30%"
  }
})


gsap.from(".project2",{
  transform:"scale(.5)",
  scrollTrigger:{
    trigger:".project2",
    scroller:"#main",
    scrub:true,
    end:"top 30%"
  }
})

gsap.from(".project3",{
  transform:"scale(.5)",
  scrollTrigger:{
    trigger:".project3",
    scroller:"#main",
    scrub:true,
    end:"top 30%"
  }
})

gsap.from(".project1 .work",{
  transform:"scale(0)",
  opacity:0,
  scrollTrigger:{
    trigger:".project1 .work",
    scroller:"#main",
    scrub:true,
    end:"top 30%"
  }
})

gsap.from(".project2 .work",{
  transform:"scale(0)",
  opacity:0,
  scrollTrigger:{
    trigger:".project2 .work",
    scroller:"#main",
    scrub:true,
    end:"top 30%"
  }
})

gsap.from(".project3 .work",{
  transform:"scale(0)",
  opacity:0,
  scrollTrigger:{
    trigger:".project3 .work",
    scroller:"#main",
    scrub:true,
    end:"top 30%"
  }
})