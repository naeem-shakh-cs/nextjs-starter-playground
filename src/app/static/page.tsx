import Link from 'next/link';
import styles from '../page.module.css';

// This makes the page static by default
export const revalidate = 3600; // Revalidate every hour

export default function StaticPage() {
  return (
    <main className={styles.main}>
      <h1>Static Page</h1>
      <p>This page is statically generated at build time and revalidated every hour.</p>
      <p>Build time: {new Date().toLocaleString()}</p>
      
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Return to the homepage</p>
        </Link>
        
        <Link href="/ssr" className={styles.card}>
          <h2>
            SSR Page <span>-&gt;</span>
          </h2>
          <p>Visit the server-side rendered page</p>
        </Link>
      </div>
    </main>
  );
}