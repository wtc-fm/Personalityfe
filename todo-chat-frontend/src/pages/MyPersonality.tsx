import { useEffect, useState } from "react";
import { getMyMbti } from "../api/user";
import { mbtiDescriptions } from "../data/mbtiDescriptions";
import { useNavigate } from "react-router-dom";
import "./MyPersonality.css";

type MBTIKey = keyof typeof mbtiDescriptions;

export default function MyPersonality() {
  const [mbti, setMbti] = useState<MBTIKey | null>(null);
  const navigate = useNavigate();
  const isMBTI = (v: any): v is MBTIKey =>
    typeof v === "string" && v in mbtiDescriptions;

  useEffect(() => {
    getMyMbti()
      .then((res: { mbti: any; }) => {
        const candidate = res?.mbti;
        if (isMBTI(candidate)) setMbti(candidate);
        else setMbti(null);
      })
      .catch(() => setMbti(null));
  }, []);

  if (!mbti) {
    return (
      <div className="my-wrapper">
        <div className="my-card">
          <h2 className="my-title">아직 성향 테스트 전이에요 😊</h2>

          <button
            className="my-btn"
            onClick={() => navigate("/personality")}
          >
            성향 테스트 시작하기
          </button>
        </div>
      </div>
    );
  }

  const info = mbtiDescriptions[mbti];

  return (
    <div className="my-wrapper">
      <div className="my-card">

        {/* MBTI 타입 */}
        <div className="my-badge">{mbti}</div>

        {/* 요약 */}
        <h2 className="my-title">{info.summary}</h2>

        {/* 세 줄 요약 */}
        <ul className="my-list">
          {info.threeLines.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>

        <button
          className="my-btn"
          onClick={() => navigate("/result", { state: { mbti } })}
        >
          결과 자세히 보기
        </button>

        <button
          className="my-btn-outline"
          onClick={() => navigate("/personality")}
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}