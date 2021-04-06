import Logo from '@resources/logos/cx';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
      </nav>

      <div className={styles.about}>
        <h1>Cristobal Schlaubitz Garcia</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <main className={styles.plantopi}></main>
      <main className={styles.synthesis}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
