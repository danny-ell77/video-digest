import React, { useState, useEffect } from "react";
import { YoutubeIcon, Check } from "lucide-react";
import styles from "../styles/components/VideoInput.module.scss";

interface VideoInputProps {
  onSubmit: (
    url: string,
    comprehensiveness: number,
    options: ProcessingOptions,
  ) => void;
  isLoading?: boolean;
}

interface ProcessingOptions {
  aiModel: string;
  titledSections: boolean;
  includeTimestamps: boolean;
  articleView: boolean;
}

const VideoInput: React.FC<VideoInputProps> = ({
  onSubmit = () => {},
  isLoading = false,
}) => {
  const [url, setUrl] = useState<string>("");
  const [comprehensiveness, setComprehensiveness] = useState<number>(1); // 0: Brief, 1: Standard, 2: Detailed
  const [options, setOptions] = useState<ProcessingOptions>({
    aiModel: "gpt-4",
    titledSections: true,
    includeTimestamps: true,
    articleView: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url, comprehensiveness, options);
    }
  };

  const getComprehensivenessLabel = () => {
    switch (comprehensiveness) {
      case 0:
        return "Brief";
      case 1:
        return "Standard";
      case 2:
        return "Detailed";
      default:
        return "Standard";
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComprehensiveness(parseInt(e.target.value));
  };

  const handleOptionChange = (option: keyof ProcessingOptions, value: any) => {
    setOptions((prev) => ({ ...prev, [option]: value }));
  };

  return (
    <div className={styles.videoInput}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="youtube-url">YouTube Video URL</label>
          <div className={styles.inputWrapper}>
            <YoutubeIcon size={20} className={styles.icon} />
            <input
              id="youtube-url"
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="ai-model">AI Model</label>
          <select
            id="ai-model"
            className={styles.select}
            value={options.aiModel}
            onChange={(e) => handleOptionChange("aiModel", e.target.value)}
          >
            <option value="gpt-4">GPT-4 (High Quality)</option>
            <option value="gpt-3.5">GPT-3.5 (Faster)</option>
            <option value="claude-3">Claude 3 (Balanced)</option>
          </select>
        </div>

        <div className={styles.sliderGroup}>
          <div className={styles.sliderHeader}>
            <label htmlFor="comprehensiveness">Comprehensiveness</label>
            <span className={styles.badge}>{getComprehensivenessLabel()}</span>
          </div>

          <input
            type="range"
            id="comprehensiveness"
            min="0"
            max="2"
            step="1"
            value={comprehensiveness}
            onChange={handleSliderChange}
            className={styles.slider}
          />

          <div className={styles.labels}>
            <span>Brief</span>
            <span>Standard</span>
            <span>Detailed</span>
          </div>
        </div>

        {comprehensiveness === 1 && (
          <div className={`${styles.optionsGroup} ${styles.standardOptions}`}>
            <h4>Standard Options</h4>

            <div className={styles.checkboxOption}>
              <label className={styles.checkboxLabel}>
                <div
                  className={`${styles.checkbox} ${options.titledSections ? styles.checked : ""}`}
                  onClick={() =>
                    handleOptionChange(
                      "titledSections",
                      !options.titledSections,
                    )
                  }
                >
                  {options.titledSections && <Check size={14} />}
                </div>
                <span>Titled Sections</span>
              </label>
            </div>

            <div className={styles.checkboxOption}>
              <label className={styles.checkboxLabel}>
                <div
                  className={`${styles.checkbox} ${options.includeTimestamps ? styles.checked : ""}`}
                  onClick={() =>
                    handleOptionChange(
                      "includeTimestamps",
                      !options.includeTimestamps,
                    )
                  }
                >
                  {options.includeTimestamps && <Check size={14} />}
                </div>
                <span>Include Timestamps</span>
              </label>
            </div>

            <div className={styles.switchOption}>
              <span>View Style:</span>
              <div className={styles.switchContainer}>
                <span className={options.articleView ? styles.active : ""}>
                  Article
                </span>
                <div
                  className={`${styles.switch} ${options.articleView ? styles.right : styles.left}`}
                  onClick={() =>
                    handleOptionChange("articleView", !options.articleView)
                  }
                >
                  <div className={styles.switchHandle}></div>
                </div>
                <span className={!options.articleView ? styles.active : ""}>
                  Plain Text
                </span>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading || !url.trim()}
        >
          {isLoading ? "Processing..." : "Process Video"}
        </button>
      </form>
    </div>
  );
};

export default VideoInput;
