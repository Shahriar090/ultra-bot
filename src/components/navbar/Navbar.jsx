import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
            <a href="#what_ultrabot">What is Ultra-Bot?</a>
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
      <div className="navbar-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-links-container">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wub">What is Ultra-Bot?</a>
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
            <div className="navbar-menu-container-sign">
              <p>Sign In</p>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
