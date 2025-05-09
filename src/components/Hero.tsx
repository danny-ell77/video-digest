import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1>Extract Key Insights from YouTube Videos</h1>
          <p>
            Save time and get the most important information from any YouTube
            video with our AI-powered summary tool. Choose your level of detail
            and get instant results.
          </p>
          <div className={styles.btnGroup}>
            <Link to="/try" className="btn btn-primary btn-lg">
              Try It Now
            </Link>
            <a href="#how-it-works" className="btn btn-secondary btn-lg">
              Learn More
            </a>
          </div>
        </div>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
            alt="Video summary illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
