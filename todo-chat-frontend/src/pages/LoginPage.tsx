import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

   const handleLogin = async () => {
    try {
      const res = await login(email, pw);

      localStorage.setItem("token", res.token);

      alert("로그인 성공!");
      navigate("/mypersonality"); 

    } catch (e: any) {
      alert("로그인 실패: " + (e.response?.data?.message || "알 수 없는 오류"));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">로그인</h1>

        <label className="login-label">이메일</label>
        <input
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
        />

        <label className="login-label">비밀번호</label>
        <input
          type="password"
          className="login-input"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />

        <button className="login-btn" onClick={handleLogin}>
          로그인
        </button>

        <p className="signup-text">
          계정이 없나요?{" "}
          <span
            className="signup-link"
            onClick={() => (window.location.href = "/signup")}
          >
            회원가입
          </span>
        </p>
      </div>
    </div>
  );
}