import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Lenis from '@studio-freight/lenis';

export const scroller = () => {

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  /* Main navigation */
  let panelsSection = document.querySelector("#panels"),
    panelsContainer = document.querySelector("#panels--wrap"),
    tween;

  document.querySelectorAll(".panel--grid__item--image").forEach((item) => {

    item.addEventListener("click", function (e) {

      let targetElem = document.querySelector(e.target.dataset.panel),
        y = targetElem;

        console.log(targetElem);
      //if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
        let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
          totalMovement = panelsContainer.scrollWidth - innerWidth;
        y = Math.round(
          tween.scrollTrigger.start +
            (targetElem.offsetLeft / totalMovement) * totalScroll
        );
      //}
      
      //console.log('useful stuff!', y, e.target.getAttribute("data-panel"));
      
      gsap.to(window, {
        scrollTo: {
          y: y,
          autoKill: false
        },
        duration: 0.35,
        ease: "ease-out",
      });

    });

  });

  const polygons = document.querySelector(".polygon");

  gsap.from('.polygon',
  {
    // scrollTrigger: {
    //   trigger : '.polygon',
    //   start: 'left center',
    //   end: 'left center',
    //   scrub: true,
    //   markers: false,
    //   horizontal: true
    // },
    y:100,
    opacity:0,
    stagger:0.1
  });

//   gsap.from('.panel--grid__item--image',
// {
//     // scrollTrigger: {
//     //     trigger : '.panel--grid__item--image',
//     //     start: '20px 60%',
//     //     end: '+=50%',
//     //     //toggleActions:'reverse pause reverse pause',
//     //     scrub: true,
//     //     markers: false,
//     //     //onEnter:() => console.log("enter")
//     // },
//     //x:100,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
// });

// gsap.from('.fade-in-right',
// {
//     scrollTrigger: {
//         trigger : '.fade-in-right',
//         start: '20px 60%',
//         end: '+=50%',
//         //toggleActions:'reverse pause reverse pause',
//         scrub: true,
//         markers: false,
//         //onEnter:() => console.log("enter")
//     },
//     x:-100,
//     opacity:0,
//     duration:3
//     // stagger:0.1,
// });

  var winWidth = window.innerWidth;

  if ( window.innerWidth >= 768 ) {

    /* Panels */
    const cont = document.querySelector("#panels--wrap");
    const panels = gsap.utils.toArray("#panels--wrap .panel");

    tween = gsap.to(panels, {
      x: () => -1 * (cont.scrollWidth - innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels--wrap",
        pin: true,
        start: "top top",
        scrub: 1,
        //snap: 0.5,
        end: () => "+=" + (cont.scrollWidth - innerWidth),
        onUpdate: (self) => {
          // also useful!
         // console.log(self.progress, '/1')
         // console.log(window.scrollY, `/${document.body.scrollHeight - window.innerHeight}`)
        }
      }
    });

  }

}

// const lenis = new Lenis();

// lenis.on('scroll', (e) => {
//   //console.log(e);
// })

// lenis.on('scroll', ScrollTrigger.update);

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000);
// })

// gsap.ticker.lagSmoothing(0);