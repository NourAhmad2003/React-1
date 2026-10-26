import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet } from "react-helmet-async";

export default function Basic() {
  return (
    <div>
      <Helmet>
        <title>Basic page</title>
        <meta
          name="description"
          content="Basic page"
        />
      </Helmet>
      <Header />
      {/* <main className="hero-section">Basic Page</main> */}
      <Content data="Basic" developer="Nour" />
      <Footer />
    </div>
  );
}
