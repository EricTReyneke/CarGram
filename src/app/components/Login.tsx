"use client";
import { useState } from "react";
import styles from "../login/Login.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  return (
    <div className={styles.container}>
      {/* Background Image Section */}
      <div className={styles.containerPicture}></div>

      {/* Login Form Section */}
      <div className={styles.containerComponents}>
        <h2 className={styles.title}>Welcome to CarGram</h2>
        <p className={styles.subtitle}>Where cars meet the digital world.</p>

        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FaLock className={styles.icon} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign In
        </button>

        <p className={styles.footerText}>
          Don’t have an account?{" "}
          <Link href="/register" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
