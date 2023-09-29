import { inView, animate, scroll } from "motion";

inView("section", ({ target }) => {
  animate(
    target.querySelector("span"),
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});


// import { animate, scroll } from "motion";

// // Progress bar representing gallery scroll
// scroll(animate(".progress", { scaleX: [0, 1] }));

// document.querySelectorAll("section").forEach((section) => {
//   const header = section.querySelector("h2");
//   scroll(animate(header, { y: [-400, 400] }), {
//     target: header
//   });
// });

// gsap.registerPlugin(ScrollTrigger);

// if ( $('body').attr('id') == 'nav-one' ) {

// 	gsap.set('.nav--logo',{
// 		width:200,
// 		marginTop:40,
// 		marginBottom:40
// 	});

// 	gsap.set('.nav--bg',{
// 		backgroundColor:'#fff',
// 		opacity:0
// 	});

// 	gsap.set('.nav--form__button', {
// 		yPercent:-100
// 	});

// 	const t1 = gsap.timeline({
// 		scrollTrigger: {
// 			start:'+=200',
// 			end:'+=1',
// 			toggleActions: 'play none none reverse',
// 			scrub: 2
// 		}
// 	});

// 	t1
// 	.to('.nav--logo', {
// 		width:150,
// 		marginTop:20,
// 		marginBottom:20
// 	})
// 	.to('.nav--bg', {
// 		opacity:1
// 	})
// 	.to('.nav--form__button', {
// 		yPercent:0
// 	});

// 	const lenis = new Lenis()

// 	lenis.on('scroll', (e) => {
// 	  console.log(e);
// 	});

// 	function raf(time) {
// 	  lenis.raf(time);
// 	  requestAnimationFrame(raf);
// 	}

// 	requestAnimationFrame(raf);

// }