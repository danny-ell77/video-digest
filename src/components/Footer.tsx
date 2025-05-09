import React from "react";
import { Link } from "react-router-dom";
import { Youtube, Twitter, Facebook, Instagram } from "lucide-react";
import styles from "../styles/components/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.about}>
          <div className={styles.logo}>
            <Youtube size={24} color="#FF0000" />
            <h2>
              Video<span>Digest</span>
            </h2>
          </div>
          <p>
            VideoDigest helps you save time by extracting key insights from
            YouTube videos using advanced AI technology.
          </p>
          <div className={styles.social}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Product</h3>
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/try">Try Now</Link>
            </li>
          </ul>
        </div>

        <div className={styles.links}>
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        <div className={styles.links}>
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookies">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.copyright}`}>
        <p>© {new Date().getFullYear()} VideoDigest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
