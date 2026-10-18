export default function Header() {
  return (
    <div>
      <header className="header">
        <h1>Web Dev Roadmap</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/">
              Home
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Basic">
              Basic
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Framework">
              Framework
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="Tips">
              Tip
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
