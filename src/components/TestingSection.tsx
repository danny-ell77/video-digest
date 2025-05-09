import React from "react";
import VideoInput from "./VideoInput";
import styles from "../styles/components/TestingSection.module.scss";
import { useNavigate } from "react-router-dom";

const TestingSection: React.FC = () => {
  const navigate = useNavigate();

  const handleProcessVideo = (url: string, comprehensiveness: number) => {
    // In a real app, we would process the video here
    // For now, we'll just navigate to the article page with mock data

    // Convert comprehensiveness number to string label
    const comprehensivenessLabel = ["Brief", "Standard", "Detailed"][
      comprehensiveness
    ];

    // Navigate to the article page with the video data
    navigate("/article", {
      state: {
        videoData: {
          title: "Understanding Artificial Intelligence",
          creator: "Tech Explained",
          publishedAt: "2023-05-15",
          duration: "15:42",
          thumbnailUrl:
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
          summary:
            "This video explores the fundamentals of artificial intelligence, covering machine learning, neural networks, and practical applications in today's world.",
          chapters: [
            {
              title: "Introduction",
              timestamp: "0:00",
              content: "Overview of AI concepts and history.",
            },
            {
              title: "Machine Learning Basics",
              timestamp: "3:24",
              content: "Explanation of how machines learn from data.",
            },
            {
              title: "Neural Networks",
              timestamp: "7:15",
              content: "Deep dive into neural network architecture.",
            },
            {
              title: "Real-world Applications",
              timestamp: "10:30",
              content: "Examples of AI in everyday technology.",
            },
            {
              title: "Future Directions",
              timestamp: "13:45",
              content: "Predictions about where AI is heading.",
            },
          ],
          keyInsights: [
            {
              title: "AI systems require large amounts of quality data",
              description:
                "The effectiveness of AI systems is directly proportional to the quality and quantity of data they are trained on.",
            },
            {
              title: "The difference between narrow AI and general AI",
              description:
                "Narrow AI is designed for specific tasks while general AI aims to perform any intellectual task that a human can do.",
            },
            {
              title: "Ethical considerations in AI development",
              description:
                "As AI becomes more prevalent, ethical considerations around bias, privacy, and autonomy become increasingly important.",
            },
          ],
          comprehensiveness: comprehensivenessLabel,
          url: url,
        },
      },
    });
  };

  return (
    <section className={styles.testingSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <h2>Try It Now</h2>
          <p>
            Enter a YouTube URL and select your desired level of detail to get
            started
          </p>
        </div>

        <div className={styles.inputContainer}>
          <VideoInput onSubmit={handleProcessVideo} />
        </div>
      </div>
    </section>
  );
};

export default TestingSection;
