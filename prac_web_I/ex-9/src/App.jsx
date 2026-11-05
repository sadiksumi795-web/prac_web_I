import "./App.css";
import sidebarStyles from "./Sidebar.module.css";

function Header() {
  return (
    <header className="header">
      <h1>ABC College</h1>
      <p style={{ color: "#fff2cc", margin: 0 }}>
        Learning today, leading tomorrow
      </p>
    </header>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#home">Home</a>
      <a href="#courses">Courses</a>
      <a href="#admissions">Admissions</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className={sidebarStyles.sidebar}>
      <h2>Quick Links</h2>
      <a href="#departments">Departments</a>
      <a href="#library">Library</a>
      <a href="#events">College Events</a>
    </aside>
  );
}

function App() {
  return (
    <div className="page">
      <Header />
      <Navigation />

      <div className="content">
        <Sidebar />

        <main className="main-content" id="home">
          <h2>Welcome to ABC College</h2>
          <p>
            ABC College provides quality education and helps students build
            skills for the future.
          </p>
          <h3>Our Mission</h3>
          <p>To support learning, creativity, and student success.</p>
        </main>
      </div>

      <footer className="footer">
        <p>© 2026 ABC College</p>
      </footer>
    </div>
  );
}

export default App;