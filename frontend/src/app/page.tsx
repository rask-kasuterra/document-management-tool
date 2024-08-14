import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("todo https://endpoint/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setErrorMessage("Login Failed.");
      }

      const data = await response.json();

      if (data.success) {
        console.log("Login successful.");

        // TODO 画面遷移
        // TODO ログイン状態の保持
      } else {
        setErrorMessage("Invalid username or password.");
      }
    } catch (error) {
      setErrorMessage("An error occured during login.");
    }
  };

  return (
    <main className={styles.main}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit"></button>
      </form>
    </main>
  );
}
