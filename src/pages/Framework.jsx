import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet } from "react-helmet-async";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";

export default function Framework() {
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
        <title>Framework page</title>
        <meta name="description" content="Framework page" />
      </Helmet>
      <Header />
      {/* <main className="hero-section"> Framework Page </main> */}
      <Content data="Framework" developer="Ahmad" />
      <Footer />
    </div>
  );
}
