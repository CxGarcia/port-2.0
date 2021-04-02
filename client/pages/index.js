import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <title>CxGarcia</title>
        <link rel="icon" href="/favicon.ico" />
      </nav>

      <main className={styles.dashboard}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
