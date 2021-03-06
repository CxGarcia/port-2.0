import Mountains from '@components/home/Mountains';
import TechStack from '@components/projects/tech-stack';
import PlantopiLogo from '@components/home/PlantopiLogo';
import SynthesisLogo from '@components/home/SynthesisLogo';

import LinkedIn from '@resources/icons/social/linkedin.svg';
import GitHub from '@resources/icons/social/github.svg';
import CV from '@resources/icons/social/cv.svg';
import TransitionMountain from '@resources/others/section-transition-mountain.svg';
import InvertedTransitionMountain from '@resources/others/inverted-section-transition-mountain.svg';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          cxgarcia<span>_</span>
        </h1>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/schlaubitzcristobal/"
            target="_blank"
            aria-label="Link to LinkedIn profile"
          >
            <LinkedIn className={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/cxgarcia"
            target="_blank"
            aria-label="Link to GitHub profile"
          >
            <GitHub className={styles.socialIcon} />
          </a>
          <a
            href="personal-resources/cv-cristobal-schlaubitz-garcia.pdf"
            aria-label="Download CV"
            download
          >
            <CV className={styles.socialIcon} />
          </a>
        </div>
      </nav>

      <section className={`${styles.intro} intro`}>
        <div className={styles.sectionText}>
          <h2>
            Hey There! My name is Cristobal and I am a Full Stack Developer from
            Venezuela. Welcome to my portfolio where you can check out some of
            my work and more info about me.
          </h2>
        </div>
        <Mountains />
      </section>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          I spent five years working in the energy industry. The more experience
          I gained, the more I convinced myself that software is the best way to
          add value to energy, and the more I understood I was at the wrong end
          of the value chain. This realization, plus my passion for creating,
          paved the way for me to become a developer.
        </p>
        <p>
          In my over two years of experience as a Full Stack Developer, I have
          worked with many technologies, including JavaScript, TypeScript,
          React, Sass, Node.js, PostgreSQL, Docker, Nginx, IoT, and many others.
        </p>
        <p>
          Ever since I built my first fully functional app that uses the Spotify
          API to search for songs and create playlists, I knew I was doing what
          I loved. Since that first app, I have come a long way, having worked
          in many different projects ranging from a digital audio workstation to
          venturing into the world of the internet of things by building an
          automatic irrigation system.
        </p>
        <p>
          When not writing code, I am usually on the road looking for a new spot
          to kitesurf, doing yoga, or trekking.
        </p>
      </section>
      <section className={`${styles.plantopi} plantopi`}>
        <TransitionMountain className={styles.transitionMountain} />
        <div className={styles.projectText}>
          <span className={styles.projectHeader}>
            <h1>Plantopi</h1>
            <span className={styles.projectLinks}>
              <a
                href="https://github.com/dev-collectiv/plantopi"
                target="_blank"
                aria-label="Link to Plantopi's GitHub repo"
              >
                GitHub Repo
              </a>
            </span>
          </span>
          <p>
            Plantopi is an automatic irrigation system that allows plant owners
            to remotely water and monitor their plants. Users can create
            multiple areas, each with their own set of humidity sensors and
            controllers (water pumps, electrovalves, lights, etc.), and setup
            irrigation schedules based on their plants' needs. The application
            communicates with Arduinos and a Raspberry Pi for IoT control and
            makes use of Open Weather API for weather data.
          </p>
          <TechStack
            fill="#161d30"
            layer="Powered by"
            items="React,TypeScript,Sass,GSAP,NestJS,Socket.io,PostgreSQL,MQTT.js,Raspberry Pi,Mosquitto,Arduino"
          />
        </div>
        <PlantopiLogo />
      </section>
      <section className={`${styles.synthesis} synthesis`}>
        <InvertedTransitionMountain
          className={styles.invertedTransitionMountain}
        />
        <div className={styles.projectText}>
          <span className={styles.projectHeader}>
            <h1>Synthesis</h1>
            <span className={styles.projectLinks}>
              <a
                href="https://github.com/CxGarcia/synthesis"
                target="_blank"
                aria-label="Link to Synthesis' GitHub repo"
              >
                GitHub Repo
              </a>
              &nbsp; / &nbsp;
              <a
                href="https://cxgarcia.com/synthesis"
                aria-label="Link to Synthesis' GitHub repo"
              >
                Live App
              </a>
            </span>
          </span>
          <p>
            Synthesis is an open-source Digital Audio Workstation built in React
            and Koa.js that allows music producers to make beats from the
            comfort of their browser. The app's library is furnished with
            thousands of samples, various synthesizers, and digital effects to
            make music from a wide range of genres.
          </p>
          <TechStack
            fill="#e9e2cf"
            layer="Powered by"
            items="React,Sass,Tone.js,GSAP,Koa,Node.js"
          />
        </div>
        <SynthesisLogo />
      </section>

      <footer className={styles.footer}></footer>
    </div>
  );
}
