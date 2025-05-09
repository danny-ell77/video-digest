import React from "react";
import { Clock, FileText, Zap, BarChart, Download, Layers } from "lucide-react";
import styles from "../styles/components/Features.module.scss";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "Save Time",
      description:
        "Get the key points from long videos in minutes instead of hours.",
    },
    {
      icon: <FileText size={24} />,
      title: "Detailed Summaries",
      description:
        "Choose between brief, standard, or detailed summaries based on your needs.",
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Processing",
      description:
        "Our AI processes videos quickly, giving you results in seconds.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Key Insights",
      description:
        "Automatically extract the most important points and takeaways.",
    },
    {
      icon: <Layers size={24} />,
      title: "Chapter Breakdown",
      description:
        "Navigate through video content with timestamped chapter summaries.",
    },
    {
      icon: <Download size={24} />,
      title: "Export Options",
      description: "Save your summaries as markdown for easy reference later.",
    },
  ];

  return (
    <section className={styles.features} id="features">
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <h2>Powerful Features</h2>
          <p>Everything you need to get the most out of your video content</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
