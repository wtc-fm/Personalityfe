import "./HomePage.css";
export default function HomePage() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero-section">

        <h1 className="hero-title">
          당신의 성향을 <br />
          <span className="hero-highlight">한눈에</span> 알아보세요
        </h1>

        <p className="hero-subtitle">
          간단한 질문만으로 당신의 성격적 성향을 빠르게 분석하고<br />
          결과를 직관적인 방식으로 확인할 수 있어요.
        </p>

        <button
          className="start-btn"
          onClick={() => (window.location.href = "/personality")}
        >
          테스트 시작하기
        </button>

        {/* ⭐ 로그인 / 회원가입 추가 */}
        <div className="auth-buttons">
          <button
            className="auth-btn login-btn"
            onClick={() => (window.location.href = "/login")}
          >
            로그인
          </button>

          <button
            className="auth-btn signup-btn"
            onClick={() => (window.location.href = "/signup")}
          >
            회원가입
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h3>간단한 테스트</h3>
          <p>5~10개의 짧은 질문만으로 성향을 분석할 수 있어요.</p>
        </div>

        <div className="feature-card">
          <h3>개인별 분석</h3>
          <p>테스트 결과는 로그인한 계정에 안전하게 저장됩니다.</p>
        </div>

        <div className="feature-card">
          <h3>시각화된 결과</h3>
          <p>그래프와 카드 UI로 직관적인 성향 정보를 제공합니다.</p>
        </div>
      </div>

    </div>
  );
}
