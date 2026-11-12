import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";
import { Link } from "react-router";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Helmet>
        <title>Web Dev Roadmap</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header />

      {user && (
        <main className="hero-section">
          <div className="hero-text">
            <h2>Welcome back, {user.displayName || user.email}!</h2>
            <p>Continue your learning journey with Web Development.</p>
            <a href="#" className="hero-btn">
              Continue Learning
            </a>
          </div>
        </main>
      )}

      {!user && (
        <main className="auth-main">
          <p className="signin-msg">
            <Link to="/signin">Sign in</Link> to continue...
          </p>
        </main>
      )}

      <Footer />
    </div>
  );
}
