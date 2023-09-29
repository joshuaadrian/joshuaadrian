import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionOne = document.querySelector('#section-one');

if ( $('body').attr('id') == 'svg-animation' ) {

    gsap.fromTo('#hay',
        {
            opacity:0,
            fill:"rgb(130, 117, 82)",
            rotate: 0,
            scale:0,
            xPercent:-100,
            transformOrigin: "50% 50%"
        },
        {
            duration: 1,
            fill:"rgb(130, 117, 82)",
                            scale:1,
                xPercent:0,
                transformOrigin: "50% 50%",
                rotate:360,
                opacity:1
            // scrollTrigger: {
            //     trigger: sectionOne,
            //     start: 'top 80%',
            //     end: 'top 20%',

            //     scrub: true,
            //     markers: false,
            //     toggleActions: 'play play reverse reverse'
            //}
        }
    );

    gsap.fromTo('#needle',
        {
            opacity:0,
            fill:"rgb(130, 117, 82)",
            rotate: 0,
            scale:0,
            xPercent:100,
            transformOrigin: "50% 50%"
        },
        {
            duration: 1,
            opacity:1,
            fill:"rgb(130, 117, 82)",
            rotate: 360,
            scale:1,
            xPercent:0,
            transformOrigin: "50% 50%"
        }
    );

	gsap.fromTo('#stroke',
        {
            opacity:0,
            fill:"rgb(130, 117, 82)",
            rotate: 360,
            scale:0,
            transformOrigin: "50% 0"
        },
        {
    		duration: 1,
            opacity:1,
            fill:"rgb(130, 117, 82)",
            rotate: 360,
            scale:1,
            transformOrigin: "50% 0"
        }
    );

}