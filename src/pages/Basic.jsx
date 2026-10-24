import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";

export default function Basic() {
  return (
    <div>
      <Header />
      {/* <main className="hero-section">Basic Page</main> */}
      <Content data="Basic" developer="Nour" />
      <Footer />
    </div>
  );
}
