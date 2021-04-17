import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function SynthesisLogo() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, delay: 1, repeatDelay: 0.5 });

    // tl.from('.barra', {
    //   scrollTrigger: {
    //     trigger: '.synthesis',
    //     scrub: 1,
    //     start: '-20% top',
    //     end: '+=30',
    //   },
    //   repeat: 0,
    //   transformOrigin: 'center center',
    //   scaleX: 0,
    //   scaleY: 0,
    //   stagger: {
    //     each: 0.25,
    //     from: 'end',
    //   },
    //   duration: 0.5,
    //   ease: 'back.out(1.5)',
    // });
    // // const onCompleteTl = gsap.timeline({

    // // });

    tl.to(
      '.barra',
      {
        duration: 1,
        transformOrigin: '50% 50%',
        scaleX: 0.5,
        ease: 'power3.out',
        stagger: 0.05,
      },
      'x'
    );

    tl.to(
      '.barra',
      {
        duration: 1,
        transformOrigin: '50% 80%',
        scaleY: 1,
        scaleX: 1,
        ease: 'elastic.out(1.3, .4)',
        stagger: 0.05,
      },
      'x+=.3'
    );

    return () => tl.kill();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 298.59 298.6"
      style={{ width: '70%', height: '70%' }}
    >
      <path
        transform="rotate(-90 135.165 149.3)"
        d="M106.3 135.46h57.73v27.68H106.3z"
        className="barra"
        fill="#276776"
      />
      <path
        transform="rotate(-90 107.615 149.3)"
        className="barra"
        d="M31.05 135.59h153.14v27.42H31.05z"
        fill="#07949b"
      />
      <path
        transform="rotate(-90 80.064 149.3)"
        className="barra"
        d="M22.34 135.46H137.8v27.68H22.34z"
        fill="#00cfae"
      />
      <path
        transform="rotate(-90 52.382 149.3)"
        className="barra"
        d="M-38.5 135.46h181.76v27.68H-38.5z"
        fill="#00f7a7"
      />
      <path
        transform="rotate(-90 24.7 149.3)"
        className="barra"
        d="M-90.76 135.46h230.91v27.68H-90.76z"
        fill="#276776"
      />
      <path
        transform="rotate(-90 162.847 149.3)"
        className="barra"
        d="M133.98 135.46h57.73v27.68h-57.73z"
        fill="#00f7a7"
      />
      <path
        transform="rotate(90 190.53 149.3)"
        className="barra"
        d="M113.96 135.46H267.1v27.68H113.96z"
        id="barra-der-2"
        fill="#00cfae"
      />
      <path
        transform="rotate(90 218.211 149.3)"
        className="barra"
        d="M160.48 135.46h115.46v27.68H160.48z"
        id="barra-der-3"
        fill="#07949b"
      />
      <path
        transform="rotate(90 245.893 149.3)"
        className="barra"
        d="M155.01 135.46h181.76v27.68H155.01z"
        id="barra-der-4"
        fill="#276776"
      />
      <path
        transform="rotate(90 273.575 149.3)"
        className="barra"
        d="M158.12 135.46h230.91v27.68H158.12z"
        id="barra-der-5"
        fill="#00f7a7"
      />
    </svg>
  );
}

export default SynthesisLogo;
