import Header from "../component/Header";
import Footer from "../component/Footer";
// import Content from "../component/Content";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";
import Moment from 'react-moment';

export default function Basic() {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return (
    <div>
      <Helmet>
        <title>Basic page</title>
        <meta name="description" content="Basic page" />
      </Helmet>
      <Header />
      {/* <main className="hero-section">Basic Page</main> */}
      {/* <Content data="Basic" developer="Nour" /> */}
      <main>
        <div className="Basic-page">
          <p> welcome{user.displayName}</p>
          <p>Email : {user.email} </p>
          <p> last sign in :{<Moment fromNow ago date={user.metadata.lastSignInTime} format="YYYY/MM/DD HH:mm" />} </p>
          <p> Account created :{<Moment fromNow ago date={user.metadata.creationTime} format="YYYY/MM/DD HH:mm" />} </p>
          <button className="delete">Delete account</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
