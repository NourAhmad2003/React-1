import "./Content.css";

export default function Content({ data, developer }) {
  return (
    <main className="content-wrapper">
      <div className="content-box">
        <span className="section-tag">{data} page</span>
        <h1 className="main-greeting">Hello {developer && `— ${developer}`}</h1>
      </div>
    </main>
  );
}