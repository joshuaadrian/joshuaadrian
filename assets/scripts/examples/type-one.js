import gsap from "gsap";
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

if ( $('body').attr('id') == 'nav-one' ) {

	gsap.set('.navigation',{
		backgroundColor:'#fff'
	});

	const lenis = new Lenis()

	lenis.on('scroll', (e) => {
	  console.log(e);
	});

	function raf(time) {
	  lenis.raf(time);
	  requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

}

// typical import
import gsap from "gsap";
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-heading');

splitTypes.forEach((char,i) => {

    const bg   = char.dataset.bgColor;
    const fg   = char.dataset.fgColor;
    const type = char.dataset.type;
    const text = new SplitType(char, { types: 'chars'});

    if ( type == 'color-change' ) {

        gsap.fromTo(text.chars, 
            {
                color: bg,
            },
            {
                color: fg,
                duration: 0.3,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                    toggleActions: 'play play reverse reverse'
                }
        });

    } else {

        gsap.from(text.chars,
        {
            scrollTrigger: {
                trigger : char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false
            },
            y:100,
            opacity:0,
            stagger:0.1,
        });

    }


});


// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
// 	console.log(e);
// })

// function raf(time) {
// 	lenis.raf(time);
// 	requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
