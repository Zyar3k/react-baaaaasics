function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo192.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <small>Bobo Development. All rights reserved</small>
    </footer>
  );
}
function MainContent() {
  return (
    <main>
      <h1>Reasons I'm excited to practice React</h1>
      <ol>
        <li>It's a popular library</li>
        <li>I'm more likely to get a job</li>
      </ol>
    </main>
  );
}

const Page = () => (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

ReactDOM.render(<Page />, document.getElementById("root"));
