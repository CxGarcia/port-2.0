import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// import styles from '@styles/Mountains.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function PlantopiLogo() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from('.circle', {
      scrollTrigger: {
        trigger: '.plantopi',
        scrub: 1,
        start: '-20% top',
        end: '+=40',
      },
      transformOrigin: 'center center',
      scaleX: 0,
      scaleY: 0,
      stagger: {
        each: 0.25,
        from: 'end',
      },
      duration: 0.5,
      ease: 'back.out(1.5)',
    });

    tl.to('.circle', {
      scrollTrigger: {
        trigger: '.plantopi',
        scrub: 1,
        start: '50% top',
        end: '+=20',
      },

      transformOrigin: 'center center',
      scaleX: 0,
      scaleY: 0,
      stagger: {
        each: 0.25,
      },
      duration: 0.5,
      ease: 'back.in(1.5)',
    });

    return () => gsap.killTweensOf('.circle');
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 298.59 298.6"
      style={{ width: '70%', height: '70%' }}
    >
      <circle
        cx="149.29"
        cy="149.3"
        r="138.75"
        fill="#276776"
        className="circle"
      />
      <circle
        cx="149.29"
        cy="149.3"
        r="118.64"
        fill="#07949b"
        className="circle"
      />
      <circle
        cx="149.29"
        cy="149.3"
        r="98.18"
        fill="#00cfae"
        className="circle"
      />
      <circle
        cx="149.29"
        cy="149.3"
        r="74.37"
        fill="#00f7a7"
        className="circle"
      />
      <circle cx="149.29" cy="149.3" r="46.37" fill="#e9e2cf" />
    </svg>
  );
}

export default PlantopiLogo;
