import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>chtnnh foundation</title>
        <meta name="description" content="Imagine a future where everyone on the planet is free to do their lives' work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/" passHref className={styles.navbarLogo}>
          <Image src='/logo.png' height="100%" width="100%" className={styles.logo} alt='chtnnh foundation logo'></Image>
        </Link>
        <div className={styles.navbar}>
          <Link href="/docs/philosophy">Philosophy</Link>
          <Link href='/blockchain'>Blockchain</Link>
          <Link href='/quantum'>Quantum Computing</Link>
          <Link href='/bci'>BCI</Link>
          <Link href='/agi'>AGI</Link>
        </div>
        <div className={styles.joinUsNavbar}>
          <Link href='https://cg018ltu1vj.typeform.com/to/CNCsLOyz'>Join Us!</Link>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Imagine a world where everyone on the planet is free to do their{' '}
          <Link className={styles.emphasis} href="docs/philosophy">lives&apos; work.</Link>
        </h1>

        <div className={styles.descriptionParas}>
          <p className={styles.description}>
            The chtnnh foundation is a collective aimed at advancing tech research and building solutions, primarily in four areas - Blockchain, Quantum Computing, BCI &amp; AGI.
          </p>
          <p className={styles.description}>
            Get started by reading our philosophy above, or deep diving into our areas of work below.
          </p>
        </div>

        <div className={styles.grid}>
          <a href="blockchain" className={styles.card}>
            <h2>Blockchain &rarr;</h2>
            <p>How decentralization of power will be the greatest catalyst for social change in our time.</p>
          </a>

          <a href="quantum" className={styles.card}>
            <h2>Quantum Computing &rarr;</h2>
            <p>How quantum computing will bring about a positive impact on the environment.</p>
          </a>

          <a href="bci" className={styles.card}>
            <h2>Brain Computer Interfaces &rarr;</h2>
            <p>How BCI will allow humanity to break down the limits of possible.</p>
          </a>

          <a href="agi" className={styles.card}>
            <h2>Artificial General Intelligence &rarr;</h2>
            <p>
              The final piece to the puzzle of solving all our problems.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://cg018ltu1vj.typeform.com/to/CNCsLOyz">Do you want to help build this future? Join us!</Link>
      </footer>
    </div>
  );
}
