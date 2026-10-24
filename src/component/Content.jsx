import "./Content.css"
export default function Content({data, developer,}) {
  return (
    <main className="hero-section">
      {data} page
      Developer: {developer}
    </main>
  )
}