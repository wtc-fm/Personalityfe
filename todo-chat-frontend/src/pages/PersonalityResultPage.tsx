import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { saveMyMbti } from "../api/user";   // 🔥 추가됨
import { mbtiDescriptions } from "../data/mbtiDescriptions";
import "./PersonalityResultPage.css";

type MBTIKey = keyof typeof mbtiDescriptions;

export default function PersonalityResultPage() {
  const { state } = useLocation();
  const mbti = (state as { mbti?: MBTIKey } | undefined)?.mbti;

  // 🔥 MBTI 자동 저장 useEffect 추가
  useEffect(() => {
    if (mbti) {
      saveMyMbti(mbti).catch(() => {}); // 실패해도 페이지는 정상 작동
    }
  }, [mbti]);

  if (!mbti) return <div>결과 없음</div>;

  const info = mbtiDescriptions[mbti];

  return (
    <div className="r-wrapper">
      <div className="r-card">

        <div className="r-type-badge">{mbti}</div>

        <h1 className="r-title">{info.summary}</h1>

        <ul className="r-three-lines">
          {info.threeLines.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <div className="r-section">
          <h2>✨ 강점</h2>
          <ul>
            {info.strengths.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
        </div>

        <div className="r-section">
          <h2>⚠️ 약점</h2>
          <ul>
            {info.weaknesses.map((w, i) => (
              <li key={i}>• {w}</li>
            ))}
          </ul>
        </div>

        <div className="r-section">
          <h2>💙 잘 맞는 유형</h2>
          <p className="r-match-text">{info.bestMatch.join(", ")}</p>
        </div>

        <div className="r-section">
          <h2>💔 덜 맞는 유형</h2>
          <p className="r-match-text">{info.worstMatch.join(", ")}</p>
        </div>

        <div className="r-section advice-box">
          <h2>🌟 한 줄 조언</h2>
          <p style={{ color: "black" }}>{info.advice}</p>
        </div>

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
