import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet } from "react-helmet-async";

export default function Framework() {
  return (
    <div>
      <Helmet>
        <title>Framework page</title>
        <meta
          name="description"
          content="Framework page"
        />
      </Helmet>
      <Header />
      {/* <main className="hero-section"> Framework Page </main> */}
      <Content data="Framework" />
      <Footer />
    </div>
  );
}
