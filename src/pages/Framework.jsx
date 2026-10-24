import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";

export default function Framework() {
  return (
    <div>
      <Header/>
      {/* <main className="hero-section"> Framework Page </main> */}
      <Content data="Framework" />
    <Footer/>
    </div>
  )
}
