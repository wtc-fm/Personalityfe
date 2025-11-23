import { useLocation } from "react-router-dom";
import { mbtiDescriptions } from "../data/mbtiDescriptions";
import "./PersonalityResultPage.css";

type MBTIKey = keyof typeof mbtiDescriptions;

export default function PersonalityResultPage() {
  const { state } = useLocation();
  const mbti = (state as { mbti?: MBTIKey } | undefined)?.mbti;

  if (!mbti) return <div>결과 없음</div>;

  const info = mbtiDescriptions[mbti];

  return (
    <div className="r-wrapper">
      <div className="r-card">

        {/* MBTI 타입 */}
        <div className="r-type-badge">{mbti}</div>

        {/* 요약 */}
        <h1 className="r-title">{info.summary}</h1>

        {/* 세 줄 요약 */}
        <ul className="r-three-lines">
          {info.threeLines.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        {/* 강점 */}
        <div className="r-section">
          <h2>✨ 강점</h2>
          <ul>
            {info.strengths.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
        </div>

        {/* 약점 */}
        <div className="r-section">
          <h2>⚠️ 약점</h2>
          <ul>
            {info.weaknesses.map((w, i) => (
              <li key={i}>• {w}</li>
            ))}
          </ul>
        </div>

        {/* 궁합 */}
        <div className="r-section">
          <h2>💙 잘 맞는 유형</h2>
          <p className="r-match-text">{info.bestMatch.join(", ")}</p>
        </div>

        <div className="r-section">
          <h2>💔 덜 맞는 유형</h2>
          <p className="r-match-text">{info.worstMatch.join(", ")}</p>
        </div>

        {/* 조언 */}
        <div className="r-section advice-box">
          <h2>🌟 한 줄 조언</h2>
          <p>{info.advice}</p>
        </div>

        {/* 다시하기 버튼 */}
        <button
          className="r-btn"
          onClick={() => (window.location.href = "/personality")}
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}
