import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/mustangmapsv1.png" alt="Mustang Maps" height="44" />
        </div>
        <a href="https://testflight.apple.com/join/hrNvqqVD" target="_blank" rel="noopener noreferrer" className="get-app-btn">Get the App</a>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Mustang Maps</h1>
          <p className="hero-subtitle">Your Cal Poly Guide</p>
          <p className="hero-description">
            Navigation for California Polytechnic State University, San Luis
            Obispo — <strong>designed around how students actually move</strong>. With
            accurate building-to-building walking routes, key amenities, and
            specific destination details, eliminate the guesswork of getting
            around campus.
          </p>

          {/* App Store Buttons */}
          <div className="store-buttons">
            <a href="https://testflight.apple.com/join/hrNvqqVD" target="_blank" rel="noopener noreferrer" className="store-btn app-store">
              <div className="store-btn-inner">
                <svg className="store-icon" viewBox="0 0 24 24" fill="white" width="22" height="22">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="store-text">
                  <span className="store-label">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </div>
            </a>
          </div>

          {/* CodeBox Attribution */}
          <div className="codebox-attribution">
            <div className="codebox-logo-placeholder">
              <img src="/codebox.png" alt="CodeBox" height="52" style={{ width: 'auto' }} />
            </div>
            <div className="codebox-text">
              <span>Created for Cal Poly students by Cal Poly students</span>
              <span>Built through CodeBox, a student-run organization</span>
            </div>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="hero-right">
          <div className="phones-container">
            {/* Back phone */}
            <div className="phone phone-back">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="phone-content">
                  <img src="/phone-back.png" alt="App screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }} />
                </div>
              </div>
            </div>

            {/* Front phone */}
            <div className="phone phone-front">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="phone-content">
                  <img src="/phone-front.png" alt="App screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;