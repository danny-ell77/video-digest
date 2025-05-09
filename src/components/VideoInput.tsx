import React, { useState } from "react";
import { YoutubeIcon } from "lucide-react";
import styles from "../styles/components/VideoInput.module.scss";

interface VideoInputProps {
  onSubmit: (url: string, comprehensiveness: number) => void;
  isLoading?: boolean;
}

const VideoInput: React.FC<VideoInputProps> = ({
  onSubmit = () => {},
  isLoading = false,
}) => {
  const [url, setUrl] = useState<string>("");
  const [comprehensiveness, setComprehensiveness] = useState<number>(1); // 0: Brief, 1: Standard, 2: Detailed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url, comprehensiveness);
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
