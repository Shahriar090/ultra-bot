import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="logo">
          <p>
            Ultra <span>Bot</span>
          </p>
        </div>
        <div className="navbar-links-container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is Ultra-Bot?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
