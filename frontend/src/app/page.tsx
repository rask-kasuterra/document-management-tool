import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value=""
          />
      </div>
      <div>
        <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value=""
          />
      </div>

    </main>
  );
}
