import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import "./Auth.css";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
      <Helmet>
        <title>Sign In page</title>
      </Helmet>
      <Header />
      <main className="auth-main">
        <form className="auth-form">
          <h2 className="auth-title">Welcome Back</h2>
          <input 
            required 
            placeholder="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            required 
            placeholder="password" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log("Logged in successfully");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log("failed to sign in");
                });
            }}
          >
            Sign in
          </button>
          <p className="account">
            <Link to="/signup">Don't have an account? Sign up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
