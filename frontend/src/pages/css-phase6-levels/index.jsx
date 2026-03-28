import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/landing/Footer";
import { CustomCursor } from "../../components/landing/CustomCursor";

const PAGE_BG = {
  red: "#fff5f5",
  blue: "#f4f8ff",
  green: "#f4fff8",
  purple: "#f8f4ff",
};

const LevelCard = ({ levelNumber, theme, difficulty, onStart }) => {
  const difficultyColors = {
    beginner: { bg: "#10b981", text: "BEGINNER" },
    moderate: { bg: "#f59e0b", text: "MODERATE" },
    hard: { bg: "#ef4444", text: "HARD" }
  };
  
  const diffColor = difficultyColors[difficulty] || difficultyColors.beginner;
  
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div
        className="flex items-end justify-center pb-6 pt-16 relative"
        style={{
          background: theme.accent,
          transition: "background 0.4s ease",
        }}
      >
        <h3
          className="font-techno font-black text-white"
          style={{ fontSize: "32px", letterSpacing: "0.1em" }}
        >
          LEVEL {levelNumber}
        </h3>
      </div>

      <div className="border-t border-gray-200" />

      <div className="px-5 py-4 bg-gray-50">
        <div className="flex items-center justify-center">
          <span 
            className="text-xs font-bold text-white uppercase tracking-wider px-4 py-2 rounded-full"
            style={{ background: diffColor.bg }}
          >
            {diffColor.text}
          </span>
        </div>
      </div>
      
      <div className="border-t border-gray-200" />
      <div className="flex-1" />

      <div className="flex flex-col items-center gap-3 px-5 py-5">
        <button
          type="button"
          onClick={onStart}
          className="font-sans font-bold text-white uppercase rounded-full transition-all duration-300 hover:scale-105"
          style={{
            width: "148px",
            paddingTop: "10px",
            paddingBottom: "10px",
            background: "#c81e1e",
            letterSpacing: "0.22em",
            fontSize: "13px",
            boxShadow: "0 2px 8px rgba(200, 30, 30, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#a01818";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(200, 30, 30, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#c81e1e";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(200, 30, 30, 0.3)";
          }}
        >
          START
        </button>
      </div>
    </div>
  );
};

const CSSPhase6LevelsPage = () => {
  const navigate = useNavigate();
  const [themeKey, setThemeKey] = useState("purple");

  const themes = {
    red: {
      thunder: "#8b0000",
      asteroid: "#ff6b6b",
      accent: "#ff5252",
      ui: "#ff6b6b",
      background: "radial-gradient(circle at 50% 32%, rgba(220, 20, 60, 0.75), rgba(30, 5, 10, 0.96) 54%, #0a0005 100%)",
    },
    blue: {
      thunder: "#003d99",
      asteroid: "#00d4ff",
      accent: "#0099ff",
      ui: "#00ccff",
      background: "radial-gradient(circle at 50% 32%, rgba(0, 102, 255, 0.7), rgba(5, 15, 50, 0.96) 56%, #000a1a 100%)",
    },
    green: {
      thunder: "#1a5c1a",
      asteroid: "#39ff14",
      accent: "#00ff88",
      ui: "#00ff99",
      background: "radial-gradient(circle at 50% 32%, rgba(0, 255, 65, 0.65), rgba(5, 30, 15, 0.96) 58%, #000a05 100%)",
    },
    purple: {
      thunder: "#6d28d9",
      asteroid: "#c084fc",
      accent: "#a855f7",
      ui: "#d8b4fe",
      background: "radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.7), rgba(30, 10, 50, 0.96) 56%, #0a0515 100%)",
    },
  };

  const currentTheme = themes[themeKey];
  const pageBg = PAGE_BG[themeKey] || "#fff5f5";

  const handleLevelStart = (levelNumber) => {
    navigate(`/levels/css/phase6/level${levelNumber}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: pageBg, transition: "background-color 0.5s ease" }}
    >
      <CustomCursor theme={currentTheme} />

      <Navbar 
        currentPage="CSS PHASE 6"
        themeKey={themeKey}
        setThemeKey={setThemeKey}
        themes={themes}
        currentTheme={currentTheme}
      />

      <main className="flex-1 px-6 py-14 sm:px-10">
        <div className="max-w-7xl mx-auto mb-8">
          <button
            onClick={() => navigate('/phases/css')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: `${currentTheme.accent}15`,
              color: currentTheme.accent,
              border: `2px solid ${currentTheme.accent}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = currentTheme.accent;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${currentTheme.accent}15`;
              e.currentTarget.style.color = currentTheme.accent;
            }}
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="font-techno font-bold text-sm uppercase tracking-wider">Back to Phases</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="h-px w-24 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${currentTheme.accent}70)`,
              }}
            />
            <span
              className="font-techno text-xs font-bold uppercase tracking-[0.35em]"
              style={{ color: `${currentTheme.accent}cc` }}
            >
              POSITIONING
            </span>
            <div
              className="h-px w-24 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${currentTheme.accent}70, transparent)`,
              }}
            />
          </div>

          <h1
            className="font-techno font-black tracking-wide text-gray-900"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            PHASE <span style={{ color: currentTheme.accent }}>6</span> LEVELS
          </h1>

          <p
            className="mt-4 font-mono text-gray-500 uppercase tracking-[0.22em]"
            style={{ fontSize: "11px" }}
          >
            6 LEVELS · MODERATE DIFFICULTY
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <LevelCard
            levelNumber={1}
            theme={currentTheme}
            difficulty="moderate"
            onStart={() => handleLevelStart(1)}
          />
          <LevelCard
            levelNumber={2}
            theme={currentTheme}
            difficulty="moderate"
            onStart={() => handleLevelStart(2)}
          />
          <LevelCard
            levelNumber={3}
            theme={currentTheme}
            difficulty="moderate"
            onStart={() => handleLevelStart(3)}
          />
          <LevelCard
            levelNumber={4}
            theme={currentTheme}
            difficulty="moderate"
            onStart={() => handleLevelStart(4)}
          />
          <LevelCard
            levelNumber={5}
            theme={currentTheme}
            difficulty="moderate"
            onStart={() => handleLevelStart(5)}
          />
          <LevelCard
            levelNumber={6}
            theme={currentTheme}
            difficulty="moderate"
            onStart={() => handleLevelStart(6)}
          />
        </div>
      </main>

      <div
        style={{
          background: "linear-gradient(to bottom, rgba(4,0,18,1) 0%, rgba(0,0,4,1) 100%)",
        }}
      >
        <Footer theme={currentTheme} />
      </div>
    </div>
  );
};

export default CSSPhase6LevelsPage;
