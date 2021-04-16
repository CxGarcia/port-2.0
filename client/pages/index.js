import Logo from '@resources/logos/cx';
import Mountains from '@components/home/Mountains';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
      </nav>

      <section className={`${styles.about} about`}>
        <div className={styles.aboutText}>
          <h1>Cristobal Schlaubitz Garcia</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Mountains />
      </section>
      <section className={styles.synthesis}></section>
      <section className={styles.plantopi}></section>

      <footer className={styles.footer}></footer>
    </div>
  );
}
