import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet } from "react-helmet-async";

export default function Tips() {
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
      <Content data="Tips" developer="Nour" />
      <Footer />
    </div>
  );
}
