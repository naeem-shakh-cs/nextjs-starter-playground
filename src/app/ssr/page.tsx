import Link from 'next/link';
import styles from '../page.module.css';

// Force SSR by setting dynamic to force-dynamic
export const dynamic = 'force-dynamic';

async function getData() {
  // This will run on every request
  return {
    timestamp: new Date().toISOString(),
    randomNumber: Math.random()
  };
}

export default async function SSRPage() {
  const data = await getData();
  
  return (
    <main className={styles.main}>
      <h1>Server-Side Rendered Page</h1>
      <p>This page is rendered on the server for each request.</p>
      <div className={styles.description}>
        <p>Server time: {data.timestamp}</p>
        <p>Random number: {data.randomNumber}</p>
      </div>
      
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Return to the homepage</p>
        </Link>
        
        <Link href="/static" className={styles.card}>
          <h2>
            Static Page <span>-&gt;</span>
          </h2>
          <p>Visit the statically generated page</p>
        </Link>
      </div>
    </main>
  );
}