import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
      <div className={styles.background}>
        <div className={styles.home}>
          {/* Add logo img */}
          <main className={styles.logo}>
            <Image
              className={styles.logo}
              src="/CartBuddyLogo.png"
              alt="Cart Buddy Logo"
              width={540}
              height={114}
              priority
            />

            {/* create card with welcome text */}
            <div className={styles.card}>
              <h1>Welcome</h1>
              <h3>Let Cart Buddy Make Your Shopping easier!</h3>
            </div>

            {/* create buttons which link to another pages */}
            <div className={styles.buttonContainer}>
            <Link href="/ShoppingList"><button>View My List</button></Link>
            <Link href="/AddItem"><button>Add New Item</button></Link>
            </div>

          </main>
        </div>
      </div >
  );
}
