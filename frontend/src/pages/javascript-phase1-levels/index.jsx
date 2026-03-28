import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Clock, CheckSquare } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/landing/Footer";
import { CustomCursor } from "../../components/landing/CustomCursor";
import { levelsAPI } from "../../utils/api";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const PAGE_BG = {
  red: "#fff5f5",
  blue: "#f4f8ff",
  green: "#f4fff8",
  purple: "#f8f4ff",
};

const LevelCard = ({ levelNumber, theme, isLocked, onStart, levelData }) => {
  const title = levelData?.title || `Level ${levelNumber}`;
  const description = levelData?.description || "";
  const testCount = levelData?.testCases?.length || 3;
  const timeLimit = levelData?.timeLimit || 300;
  const mins = Math.floor(timeLimit / 60);

  return (
    <div
      className={`flex flex-col bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
        isLocked
          ? "opacity-60 border-gray-200 cursor-not-allowed"
          : "border-gray-200 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
      }`}
      onClick={!isLocked ? onStart : undefined}
    >
      <div
        className="flex flex-col items-center justify-end pb-5 pt-10 relative"
        style={{
          background: isLocked ? "#9CA3AF" : theme.accent,
          transition: "background 0.4s ease",
        }}
      >
        <span className="font-techno font-black text-white" style={{ fontSize: "28px", letterSpacing: "0.1em" }}>
          LEVEL {levelNumber}
        </span>
        <span className="font-mono text-white/80 mt-1" style={{ fontSize: "10px", letterSpacing: "0.15em" }}>
          {isLocked ? "LOCKED" : "AVAILABLE"}
        </span>
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Lock className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
        )}
      </div>

      <div className="border-t border-gray-200" />

      <div className="px-5 pt-4 pb-2">
        <h3 className="font-techno font-bold text-gray-900 text-sm uppercase tracking-wide leading-tight">
          {title}
        </h3>
      </div>

      <div className="px-5 pb-3 flex-1">
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{description}</p>
      </div>

      <div className="border-t border-gray-100" />

      <div className="px-5 py-3 flex items-center justify-between bg-gray-50/70">
        <div className="flex items-center gap-1.5 text-gray-500">
          <CheckSquare className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold">{testCount} Tests</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold">{mins} min</span>
        </div>
      </div>

      <div className="border-t border-gray-200" />

      <div className="flex flex-col items-center gap-3 px-5 py-5">
        {isLocked ? (
          <button
            type="button"
            disabled
            className="font-sans font-bold text-white uppercase rounded-full cursor-not-allowed flex items-center gap-2"
            style={{
              width: "148px",
              paddingTop: "10px",
              paddingBottom: "10px",
              background: "#9CA3AF",
              letterSpacing: "0.18em",
              fontSize: "12px",
            }}
          >
            <Lock className="w-4 h-4" />
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
              background: theme.accent,
              letterSpacing: "0.18em",
              fontSize: "12px",
              boxShadow: `0 4px 14px ${theme.accent}55`,
            }}
          >
            START
          </button>
        )}
      </div>
    </div>
  );
};

const JavaScriptPhase1LevelsPage = () => {
  const navigate = useNavigate();
  const [themeKey, setThemeKey] = useState("purple");
  const [completedLevels, setCompletedLevels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const TOTAL_LEVELS = 10;

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const response = await levelsAPI.getProgress();
      const completed = response.data.completedLevels || [];
      const phase1Completed = completed
        .filter((cl) => cl.course === "javascript" && cl.phase === 1)
        .map((cl) => cl.level);
      setCompletedLevels(phase1Completed);
    } catch (error) {
      console.error("Error fetching progress:", error);
      setCompletedLevels([]);
    } finally {
      setIsLoading(false);
    }
  };

  const isLevelUnlocked = (levelNum) => {
    if (levelNum === 1) return true;
    return completedLevels.includes(levelNum - 1);
  };

  const themes = {
    red: { thunder: "#8b0000", asteroid: "#ff6b6b", accent: "#ff5252", ui: "#ff6b6b", background: "radial-gradient(circle at 50% 32%, rgba(220, 20, 60, 0.75), rgba(30, 5, 10, 0.96) 54%, #0a0005 100%)" },
    blue: { thunder: "#003d99", asteroid: "#00d4ff", accent: "#0099ff", ui: "#00ccff", background: "radial-gradient(circle at 50% 32%, rgba(0, 102, 255, 0.7), rgba(5, 15, 50, 0.96) 56%, #000a1a 100%)" },
    green: { thunder: "#1a5c1a", asteroid: "#39ff14", accent: "#00ff88", ui: "#00ff99", background: "radial-gradient(circle at 50% 32%, rgba(0, 255, 65, 0.65), rgba(5, 30, 15, 0.96) 58%, #000a05 100%)" },
    purple: { thunder: "#6d28d9", asteroid: "#c084fc", accent: "#a855f7", ui: "#d8b4fe", background: "radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.7), rgba(30, 10, 50, 0.96) 56%, #0a0515 100%)" },
  };

  const currentTheme = themes[themeKey];
  const pageBg = PAGE_BG[themeKey] || "#fff5f5";

  const handleLevelStart = (levelNumber) => {
    navigate(`/levels/javascript/phase1/level${levelNumber}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: pageBg }}>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-r-transparent mb-4"
            style={{ borderColor: themes[themeKey].accent, borderRightColor: "transparent" }} />
          <p className="text-gray-600 font-techno">Loading levels...</p>
        </div>
      </div>
    );
  }

  const completedCount = completedLevels.filter((l) => l <= TOTAL_LEVELS).length;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: pageBg, transition: "background-color 0.5s ease" }}>
      <CustomCursor theme={currentTheme} />
      <Navbar currentPage="JAVASCRIPT PHASE 1" themeKey={themeKey} setThemeKey={setThemeKey} themes={themes} currentTheme={currentTheme} />

      <main className="flex-1 px-6 py-14 sm:px-10">
        <div className="max-w-7xl mx-auto mb-8">
          <button
            onClick={() => navigate("/phases/javascript")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ background: `${currentTheme.accent}15`, color: currentTheme.accent, border: `2px solid ${currentTheme.accent}30` }}
            onMouseEnter={(e) => { e.currentTarget.style.background = currentTheme.accent; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = `${currentTheme.accent}15`; e.currentTarget.style.color = currentTheme.accent; }}
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="font-techno font-bold text-sm uppercase tracking-wider">Back to Phases</span>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-24 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${currentTheme.accent}70)` }} />
            <span className="font-techno text-xs font-bold uppercase tracking-[0.35em]" style={{ color: `${currentTheme.accent}cc` }}>VARIABLES &amp; TYPES</span>
            <div className="h-px w-24 rounded-full" style={{ background: `linear-gradient(90deg, ${currentTheme.accent}70, transparent)` }} />
          </div>
          <h1 className="font-techno font-black tracking-wide text-gray-900" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            PHASE <span style={{ color: currentTheme.accent }}>1</span> LEVELS
          </h1>
          <p className="mt-4 font-mono text-gray-500 uppercase tracking-[0.22em]" style={{ fontSize: "11px" }}>
            {TOTAL_LEVELS} LEVELS · BEGINNER DIFFICULTY · SEQUENTIAL UNLOCK
          </p>
          <div className="mt-6 max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Progress</span>
              <span className="text-xs font-bold" style={{ color: currentTheme.accent }}>{completedCount}/{TOTAL_LEVELS} Completed</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${(completedCount / TOTAL_LEVELS) * 100}%`, background: currentTheme.accent }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1).map((levelNum) => (
            <LevelCard
              key={levelNum}
              levelNumber={levelNum}
              theme={currentTheme}
              isLocked={!isLevelUnlocked(levelNum)}
              onStart={() => handleLevelStart(levelNum)}
              levelData={javascriptPhase1Levels[levelNum]}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 border"
            style={{ borderColor: `${currentTheme.accent}30`, background: `${currentTheme.accent}09` }}>
            <Lock className="w-4 h-4" style={{ color: currentTheme.accent }} />
            <span className="font-techno font-bold uppercase tracking-widest" style={{ fontSize: "10px", color: currentTheme.accent }}>
              Complete each level to unlock the next one
            </span>
          </div>
        </div>
      </main>

      <div style={{ background: "linear-gradient(to bottom, rgba(4,0,18,1) 0%, rgba(0,0,4,1) 100%)" }}>
        <Footer theme={currentTheme} />
      </div>
    </div>
  );
};

export default JavaScriptPhase1LevelsPage;
