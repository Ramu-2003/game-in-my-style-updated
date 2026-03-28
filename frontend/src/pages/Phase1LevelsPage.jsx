import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Lock, BookOpen } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/landing/Footer";
import { CustomCursor } from "../components/landing/CustomCursor";

const PAGE_BG = {
  red: "#fff5f5",
  blue: "#f4f8ff",
  green: "#f4fff8",
  purple: "#f8f4ff",
};

const COURSE_INFO = {
  html: { name: "HTML", levels: 12 },
  css: { name: "CSS", levels: 14 },
  javascript: { name: "JAVASCRIPT", levels: 18 },
  python: { name: "PYTHON", levels: 16 },
  java: { name: "JAVA", levels: 20 },
};

const LevelCard = ({ levelNumber, theme, isLocked, onStart }) => {
  return (
    <div className={`flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${isLocked ? 'opacity-60' : 'hover:shadow-lg hover:-translate-y-1'}`}>
      {/* Top section with level number */}
      <div
        className="flex items-center justify-center py-8 relative"
        style={{
          background: isLocked ? '#9CA3AF' : theme.accent,
          transition: "background 0.4s ease",
        }}
      >
        <h3
          className="font-techno font-black text-white"
          style={{ fontSize: "28px", letterSpacing: "0.1em" }}
        >
          LEVEL {levelNumber}
        </h3>
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Lock className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
        )}
      </div>

      <div className="border-t border-gray-200" />

      {/* Rules section */}
      <div className="px-5 py-4 flex-1">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <h4 className="font-techno font-bold text-gray-800 text-xs uppercase tracking-wider mb-2">
              Rules
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Complete all tasks to unlock next level</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Earn G-THUNDER points for completion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>No time limit - learn at your pace</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200" />

      {/* Bottom section with button */}
      <div className="flex flex-col items-center gap-3 px-5 py-5">
        {isLocked ? (
          <button
            type="button"
            disabled
            className="font-sans font-bold text-white uppercase rounded-full cursor-not-allowed"
            style={{
              width: "148px",
              paddingTop: "10px",
              paddingBottom: "10px",
              background: "#9CA3AF",
              letterSpacing: "0.22em",
              fontSize: "13px",
            }}
          >
            LOCKED
          </button>
        ) : (
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
        )}
      </div>
    </div>
  );
};

const Phase1LevelsPage = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [themeKey, setThemeKey] = useState("purple");
  
  // TODO: This should come from backend/user progress
  const unlockedLevel = 1;

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
  const courseInfo = COURSE_INFO[courseId] || { name: "COURSE", levels: 12 };

  const handleStartLevel = (levelNumber) => {
    // TODO: Navigate to actual level gameplay
    console.log(`Starting ${courseInfo.name} Phase 1 Level ${levelNumber}`);
    // navigate(`/levels/${courseId}/phase1/level${levelNumber}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: pageBg, transition: "background-color 0.5s ease" }}
    >
      <CustomCursor theme={currentTheme} />

      <Navbar 
        currentPage={`${courseInfo.name} PHASE 1`}
        themeKey={themeKey}
        setThemeKey={setThemeKey}
        themes={themes}
        currentTheme={currentTheme}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-6 py-14 sm:px-10">
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
              {courseInfo.name} · PHASE 1
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
            CHOOSE YOUR{" "}
            <span style={{ color: currentTheme.accent }}>LEVEL</span>
          </h1>

          <p
            className="mt-4 font-mono text-gray-500 uppercase tracking-[0.22em]"
            style={{ fontSize: "11px" }}
          >
            10 LEVELS · PROGRESSIVE DIFFICULTY · UNLOCK SEQUENTIALLY
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((levelNum) => (
            <LevelCard
              key={levelNum}
              levelNumber={levelNum}
              theme={currentTheme}
              isLocked={levelNum > unlockedLevel}
              onStart={() => handleStartLevel(levelNum)}
            />
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-14 flex justify-center">
          <div
            className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 border"
            style={{
              borderColor: `${currentTheme.accent}30`,
              background: `${currentTheme.accent}09`,
            }}
          >
            <svg
              viewBox="0 0 20 20"
              width="17"
              height="17"
              fill={currentTheme.accent}
            >
              <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm-1.5 14.5L4 9.9l1.4-1.4 3.1 3.1 6.1-6.1 1.4 1.4-7.5 7.6z" />
            </svg>
            <span
              className="font-techno font-bold uppercase tracking-widest"
              style={{ fontSize: "10px", color: currentTheme.accent }}
            >
              Complete Level {unlockedLevel} to Unlock Level {unlockedLevel + 1}
            </span>
          </div>
        </div>
      </main>

      {/* FOOTER */}
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

export default Phase1LevelsPage;
