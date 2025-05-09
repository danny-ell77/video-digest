import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Youtube } from "lucide-react";
import styles from "../styles/components/Header.module.scss";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Youtube size={28} color="#FF0000" />
          <h1>
            Video<span>Digest</span>
          </h1>
        </div>

        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className={styles.actions}>
          <Link to="/try" className="btn btn-primary">
            Try Now
          </Link>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/features" onClick={() => setMobileMenuOpen(false)}>
            Features
          </Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link
            to="/try"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
          >
            Try Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
