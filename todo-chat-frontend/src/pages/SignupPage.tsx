import { useState } from "react";
import { signup } from "../api/auth"; 
import "./Signup.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleSignup = async () => {
    try {
      await signup(email, pw);
      alert("회원가입 성공!");
      window.location.href = "/login";  // ⭐ 성공 시 로그인 페이지로 이동
    } catch (err: any) {
      console.error(err);
      alert("회원가입 실패: " + (err.response?.data?.message || "알 수 없는 오류"));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="title">회원가입</h1>

        <label className="label">이메일</label>
        <input
          className="input"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">비밀번호</label>
        <input
          className="input"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        <button className="button" onClick={handleSignup}>
          가입하기
        </button>
      </div>
    </div>
  );
}
