import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet } from "react-helmet-async";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";

export default function Tips() {
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
        <title>Tips page</title>
        <meta
          name="description"
          content="Tips page created using create-react-app"
        />
      </Helmet>
      <Header />
      {/* <main className="hero-section">Tips Page</main> */}
      <Content data="Tips" developer="Abo Al-Roos" />
      <Footer />
    </div>
  );
}
