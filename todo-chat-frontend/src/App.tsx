import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PersonalityPage from "./pages/PersonalityPage";
import PersonalityResultPage from "./pages/PersonalityResultPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 경로 */}
        <Route path="/" element={<HomePage />} />

        {/* 회원가입 */}
        <Route path="/signup" element={<SignupPage />} />

                {/* 로그인 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/personality" element={<PersonalityPage />} />
        <Route path="/result" element={<PersonalityResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}