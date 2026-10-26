import "./Content.css"
export default function Content({data, developer,}) {
  return (
    <main className="hero-section">
      {data} page
      <h1 id="hello" style={{backgroundColor: 'rgb(17, 181, 227)', color: 'black'}}> Hello</h1>
    </main>
  )
}