import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";

export default function Tips() {
  return (
    <div>
      <Header/>
      {/* <main className="hero-section">Tips Page</main> */}
      <Content data="Tips" developer="Nour" />
      <Footer/>
    </div>
  );
}
