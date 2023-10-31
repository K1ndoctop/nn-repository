import React, { useState, useEffect } from "react";
import axios from "axios";
import { PROGRESS_API } from "../../../helpers/const";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const fetchProgress = async () => {
    try {
      const response = await axios.get(PROGRESS_API);
      if (response.data.length > 0) {
        const lastVote = response.data[response.data.length - 1];
        setProgress(lastVote.progress);
      }
    } catch (error) {
      console.error("Failed to fetch progress:", error);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const handleButtonClick = async () => {
    if (progress < 100) {
      const newProgress = progress + 1;
      try {
        await axios.post(PROGRESS_API, { progress: newProgress });
        setProgress(newProgress);
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
          {""}
        </div>
      </div>
      <div className="progress-label">{progress} votes</div>
      <button className="progress-btn" onClick={handleButtonClick}>
        Vote
      </button>
    </div>
  );
};

export default ProgressBar;
