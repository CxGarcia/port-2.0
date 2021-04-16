import Logo from '@resources/logos/cx';
import Mountains from '@components/home/Mountains';

import LinkedIn from '@resources/icons/social/linkedin.svg';
import GitHub from '@resources/icons/social/github.svg';
import CV from '@resources/icons/social/cv.svg';
import TransitionMountain from '@resources/others/section-transition-mountain.svg';

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
            <LinkedIn />
          </a>
          <a
            href="https://github.com/cxgarcia"
            target="_blank"
            aria-label="Link to GitHub profile"
          >
            <GitHub />
          </a>
          <a
            href="personal-resources/cv-cristobal-schlaubitz-garcia.pdf"
            download
          >
            <CV />
          </a>
        </div>
      </nav>

      <section className={`${styles.about} about`}>
        <div className={styles.sectionText}>
          <h2>
            Hey There! My name is Cristobal and I am a Full Stack Developer from
            Venezuela
          </h2>
          <p></p>
        </div>
        <Mountains />
      </section>
      <section className={styles.synthesis}>
        <h1>Synthesis</h1>
        <p>
          Synthesis is an open-source Digital Audio Workstation built in React
          and Koa.js so that music producers can make beats from the comfort of
          their browser. The app's library is furnished with thousands of
          samples, various synthesizers, and digital effects to make music from
          a wide range of genres.
        </p>
      </section>
      <section className={styles.plantopi}>
        <TransitionMountain className={styles.transitionMountain} />
        <h1>Plantopi</h1>
        <p>
          Plantopi is an automatic irrigation system that allows plant owners to
          remotely water and monitor their plants. Users can create multiple
          areas, each with their own set of humidity sensors and controllers
          (water pumps, electrovalves, lights, etc.), and setup irrigation
          schedules based on their plants' needs. The application communicates
          with Arduinos and a Raspberry Pi for IoT control and makes use of Open
          Weather API for weather data.
        </p>
      </section>

      <footer className={styles.footer}></footer>
    </div>
  );
}
