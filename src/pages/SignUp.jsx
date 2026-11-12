import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { auth } from "../firebase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router";

export default function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Helmet>
        <title>Sign Up Page</title>
      </Helmet>
      <Header />
      <main className="auth-main">
        <form className="auth-form">
          <h2 className="auth-title">Create a new account</h2>
          <input required placeholder="name" type="text" />
          <input
            required
            placeholder="email"
            type="email"
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
          />
          <input
            required
            placeholder="password"
            type="password"
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
          />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log("success");
                  navigate("/");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode, errorMessage);
                });
            }}
          >
            Sign up
          </button>
          <p className="account">
            <Link to="/signin">Already have an account? Sign in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
