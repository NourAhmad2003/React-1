import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import "./Auth.css";

export default function SignIn() {
  return (
    <div>
      <Helmet>
        <title>Sign In page</title>
      </Helmet>
      <Header />
      <main className="auth-main">
        <form className="auth-form">
          <h2 className="auth-title">Welcome Back</h2>
          <input required placeholder="email" type="email" />
          <input required placeholder="password" type="password" />
          <button type="submit">Sign in</button>
          <p className="account">
            <Link to="/signup">Don't have an account? Sign up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
