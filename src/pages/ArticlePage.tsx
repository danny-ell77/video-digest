import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  User,
  Calendar,
  Clock,
  ChevronDown,
  Cpu,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/pages/ArticlePage.module.scss";

interface Chapter {
  title: string;
  timestamp: string;
  content: string;
}

interface KeyInsight {
  title: string;
  description: string;
}

interface ProcessingOptions {
  aiModel: string;
  titledSections: boolean;
  includeTimestamps: boolean;
  articleView: boolean;
}

const ArticlePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openChapter, setOpenChapter] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"article" | "plain">("article");

  // In a real app, this would come from the location state or an API call
  // For now, we'll use mock data similar to what was in VideoSummary
  const videoData = location.state?.videoData || {
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
    comprehensiveness: "Standard",
    options: {
      aiModel: "gpt-4",
      titledSections: true,
      includeTimestamps: true,
      articleView: true,
    } as ProcessingOptions,
  };

  // Set view mode based on options
  React.useEffect(() => {
    if (videoData.options) {
      setViewMode(videoData.options.articleView ? "article" : "plain");
    }
  }, [videoData.options]);

  const toggleChapter = (index: number) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  const handleExport = () => {
    // In a real app, this would generate and download a markdown file
    console.log("Exporting summary as markdown");
  };

  const getModelDisplayName = (modelId: string) => {
    switch (modelId) {
      case "gpt-4":
        return "GPT-4";
      case "gpt-3.5":
        return "GPT-3.5";
      case "claude-3":
        return "Claude 3";
      default:
        return modelId;
    }
  };

  const renderPlainTextView = () => {
    return (
      <div className={styles.plainTextView}>
        <h2>Summary</h2>
        <p>{videoData.summary}</p>

        <h2>Content</h2>
        {videoData.chapters.map((chapter: Chapter, index: number) => (
          <div key={index} className={styles.plainTextChapter}>
            {videoData.options?.titledSections && <h3>{chapter.title}</h3>}
            {videoData.options?.includeTimestamps && (
              <span className={styles.plainTimestamp}>{chapter.timestamp}</span>
            )}
            <p>{chapter.content}</p>
          </div>
        ))}

        <h2>Key Insights</h2>
        {videoData.keyInsights.map((insight: KeyInsight, index: number) => (
          <div key={index} className={styles.plainTextInsight}>
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderArticleView = () => {
    return (
      <>
        <div className={styles.section}>
          <h2>Summary</h2>
          <p>{videoData.summary}</p>
        </div>

        {videoData.options?.titledSections !== false && (
          <div className={`${styles.section} ${styles.chapters}`}>
            <h2>Chapters</h2>
            {videoData.chapters.map((chapter: Chapter, index: number) => (
              <div key={index} className={styles.chapter}>
                <div
                  className={`${styles.chapterHeader} ${openChapter === index ? styles.active : ""}`}
                  onClick={() => toggleChapter(index)}
                >
                  <div className={styles.chapterTitle}>
                    {videoData.options?.includeTimestamps && (
                      <span className={styles.timestamp}>
                        {chapter.timestamp}
                      </span>
                    )}
                    <h3>{chapter.title}</h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`${styles.icon} ${openChapter === index ? styles.active : ""}`}
                  />
                </div>
                {openChapter === index && (
                  <div className={styles.chapterContent}>{chapter.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className={`${styles.section} ${styles.insights}`}>
          <h2>Key Insights</h2>
          <div className={styles.insightGrid}>
            {videoData.keyInsights.map((insight: KeyInsight, index: number) => (
              <div key={index} className={styles.insightCard}>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />

      <main className={styles.articlePage}>
        <div className={`container ${styles.container}`}>
          <div className={styles.header}>
            <button className={styles.backLink} onClick={() => navigate("/")}>
              <ArrowLeft size={16} />
              Back to Home
            </button>

            <h1 className={styles.title}>{videoData.title}</h1>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <User size={16} />
                {videoData.creator}
              </div>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                {videoData.publishedAt}
              </div>
              <div className={styles.metaItem}>
                <Clock size={16} />
                {videoData.duration}
              </div>
              {videoData.options?.aiModel && (
                <div className={styles.metaItem}>
                  <Cpu size={16} />
                  {getModelDisplayName(videoData.options.aiModel)}
                </div>
              )}
            </div>

            <div className={styles.headerControls}>
              <span className={styles.badge}>
                {videoData.comprehensiveness} Summary
              </span>

              {videoData.comprehensiveness === "Standard" && (
                <div className={styles.viewToggle}>
                  <button
                    className={`${styles.viewButton} ${viewMode === "article" ? styles.active : ""}`}
                    onClick={() => setViewMode("article")}
                  >
                    Article View
                  </button>
                  <button
                    className={`${styles.viewButton} ${viewMode === "plain" ? styles.active : ""}`}
                    onClick={() => setViewMode("plain")}
                  >
                    Plain Text
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className={styles.thumbnail}>
            <img src={videoData.thumbnailUrl} alt={videoData.title} />
          </div>

          {viewMode === "article" ? renderArticleView() : renderPlainTextView()}

          <div className={styles.actions}>
            <button onClick={handleExport} className={styles.exportButton}>
              <Download size={18} />
              Export as Markdown
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
