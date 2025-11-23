import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { calcMbti } from "../utils/calcPersonality";
import "./PersonalityPage.css";

export default function PersonalityPage() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState<"A" | "B" | null>(null);
  const navigate = useNavigate();

  const handleChoice = (choice: "A" | "B") => {
    setSelected(choice); // ⭐ 클릭 버튼 강조

    setTimeout(() => {
      const q = questions[index];

      setAnswers((prev) => ({
        ...prev,
        [index]: { dimension: q.dimension, value: choice },
      }));

      if (index < questions.length - 1) {
        setIndex((prev) => prev + 1);
        setSelected(null); // 다음 질문 진입 시 강조 제거
      } else {
        const result = calcMbti({
          ...answers,
          [index]: { dimension: q.dimension, value: choice },
        });
        navigate("/result", { state: { mbti: result } });
      }
    }, 250); // ⭐ 클릭 애니메이션 시간
  };

  const q = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  return (
    <div className="p-wrapper">
      <div className="p-left">
        <div className="p-card big-card">
          <h2 className="p-question-text">{q.text}</h2>

          <div className="p-options">
            <button
              className={`p-option ${selected === "A" ? "selected" : ""}`}
              onClick={() => handleChoice("A")}
            >
              {q.A}
            </button>

            <button
              className={`p-option ${selected === "B" ? "selected" : ""}`}
              onClick={() => handleChoice("B")}
            >
              {q.B}
            </button>
          </div>
        </div>
      </div>

      <div className="p-right">
        <div className="p-summary-box">
          <h3>진행률</h3>

          <div className="p-progress-bar">
            <span style={{ width: `${progress}%` }}></span>
          </div>

          <p className="p-step-text">
            {index + 1} / {questions.length} 문항
          </p>
        </div>
      </div>
    </div>
  );
}

