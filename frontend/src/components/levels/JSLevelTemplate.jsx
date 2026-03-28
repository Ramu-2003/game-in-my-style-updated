import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown, Play, Send, Clock, CheckCircle2, XCircle, X } from "lucide-react";
import { Navbar } from "../Navbar";
import { CustomCursor } from "../landing/CustomCursor";
import { levelsAPI, validationAPI } from "../../utils/api";

const PAGE_BG = {
  red: "#fff5f5",
  blue: "#f4f8ff",
  green: "#f4fff8",
  purple: "#f8f4ff",
};

const JSLevelTemplate = ({ challenge, course, phase, levelNumber }) => {
  const navigate = useNavigate();
  const [themeKey, setThemeKey] = useState("purple");
  const [code, setCode] = useState(challenge.starterCode);
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const [isExpectedOpen, setIsExpectedOpen] = useState(true);
  const [testResults, setTestResults] = useState(
    challenge.testCases.map((_, index) => ({ id: index + 1, passed: false }))
  );
  
  const timerKey = `${course}_level${levelNumber}_timer`;
  
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem(timerKey);
    if (saved) {
      const { timeLeft: savedTime, timestamp } = JSON.parse(saved);
      const elapsed = Math.floor((Date.now() - timestamp) / 1000);
      const remaining = savedTime - elapsed;
      return remaining > 0 ? remaining : 0;
    }
    return challenge.timeLimit;
  });
  
  const [isRunning, setIsRunning] = useState(() => {
    const saved = sessionStorage.getItem(timerKey);
    if (saved) {
      const { timeLeft: savedTime, timestamp } = JSON.parse(saved);
      const elapsed = Math.floor((Date.now() - timestamp) / 1000);
      const remaining = savedTime - elapsed;
      return remaining > 0;
    }
    return true;
  });
  
  const [showExitModal, setShowExitModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [levelResult, setLevelResult] = useState(null);
  const [isClaimingReward, setIsClaimingReward] = useState(false);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [actualOutput, setActualOutput] = useState("");
  const editorRef = useRef(null);

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

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      sessionStorage.setItem(timerKey, JSON.stringify({
        timeLeft,
        timestamp: Date.now()
      }));
    }
  }, [timeLeft, isRunning, timerKey]);

  useEffect(() => {
    if (timeLeft === 0 || showResultModal) {
      sessionStorage.removeItem(timerKey);
    }
  }, [timeLeft, showResultModal, timerKey]);

  useEffect(() => {
    return () => {
      const isRefresh = performance.getEntriesByType('navigation')[0]?.type === 'reload';
      if (!isRefresh) {
        sessionStorage.removeItem(timerKey);
      }
    };
  }, [timerKey]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const addConsoleMessage = (message, type = "info") => {
    setConsoleOutput((prev) => [...prev, { message, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  const handleCompile = async () => {
    if (isCompiling) return;
    
    setIsCompiling(true);
    setConsoleOutput([]);
    addConsoleMessage("🔄 Compiling JavaScript...", "info");

    const trimmedCode = code.trim();
    if (!trimmedCode) {
      addConsoleMessage("❌ Error: Code is empty", "error");
      setIsCompiling(false);
      return;
    }

    try {
      addConsoleMessage("🤖 Validating with AI...", "info");
      
      const response = await validationAPI.validateJS({
        userCode: trimmedCode,
        levelTitle: challenge.title,
        levelDescription: challenge.description,
        testCases: challenge.testCases,
        expectedOutput: challenge.expectedOutput
      });

      const validation = response.data.validation;

      if (validation.errors && validation.errors.length > 0) {
        addConsoleMessage("❌ Compilation failed with errors:", "error");
        validation.errors.forEach((error) => {
          addConsoleMessage(`   ${error.message}`, "error");
        });
      } else {
        addConsoleMessage("✅ Compilation successful!", "success");
      }

      const newTestResults = validation.testResults.map(tr => ({
        id: tr.id,
        passed: tr.passed
      }));
      setTestResults(newTestResults);

      const allPassed = validation.allTestsPassed;
      setCanSubmit(allPassed);

      if (allPassed) {
        addConsoleMessage("🎉 All test cases passed! You can now submit.", "success");
      } else {
        addConsoleMessage("⚠️ Some test cases failed. Fix the errors and try again.", "warning");
        
        validation.testResults.forEach((test) => {
          if (!test.passed) {
            addConsoleMessage(`   ❌ Test Case ${test.id}: ${test.message}`, "warning");
          }
        });
      }

      setActualOutput(trimmedCode);
      
    } catch (error) {
      console.error('Validation error:', error);
      addConsoleMessage("❌ Validation failed. Please try again.", "error");
    } finally {
      setIsCompiling(false);
    }
  };

  const handleSubmit = () => {
    if (!canSubmit) {
      addConsoleMessage("❌ Cannot submit: Not all test cases passed", "error");
      return;
    }

    if (timeLeft <= 0) {
      addConsoleMessage("❌ Cannot submit: Time limit exceeded", "error");
      return;
    }

    addConsoleMessage("🎉 Level completed successfully!", "success");
    setIsRunning(false);
    setLevelResult('win');
    setShowResultModal(true);
  };

  const handleClaimReward = async () => {
    if (rewardClaimed) return;
    
    setIsClaimingReward(true);
    
    try {
      const xpReward = 50;
      
      await levelsAPI.completeLevel({
        course,
        phase,
        level: levelNumber,
        xpReward
      });
      
      setRewardClaimed(true);
      window.dispatchEvent(new Event('pointsUpdated'));
      
      setTimeout(() => {
        navigate(`/levels/${course}/phase${phase}`);
      }, 1500);
    } catch (error) {
      console.error('Error claiming reward:', error);
      alert(error.response?.data?.message || 'Error claiming reward');
    } finally {
      setIsClaimingReward(false);
    }
  };

  const handleTimeUp = () => {
    if (!showResultModal) {
      setIsRunning(false);
      setLevelResult('lose');
      setShowResultModal(true);
      addConsoleMessage("⏰ Time's up!", "error");
    }
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleExit = () => {
    setShowExitModal(true);
  };

  const confirmExit = () => {
    navigate(`/levels/${course}/phase${phase}`);
  };

  const cancelExit = () => {
    setShowExitModal(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: pageBg, transition: "background-color 0.5s ease" }}
    >
      <CustomCursor theme={currentTheme} />

      <Navbar
        currentPage={`${course.toUpperCase()} LEVEL ${levelNumber}`}
        themeKey={themeKey}
        setThemeKey={setThemeKey}
        themes={themes}
        currentTheme={currentTheme}
      />

      <main className="flex-1 px-4 py-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div
                className="h-px w-32 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${currentTheme.accent}70)`,
                }}
              />
              <span
                className="font-techno text-lg font-black uppercase tracking-[0.3em]"
                style={{ color: currentTheme.accent }}
              >
                {course.toUpperCase()} · PHASE {phase} · LEVEL {levelNumber}
              </span>
              <div
                className="h-px w-32 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${currentTheme.accent}70, transparent)`,
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="font-techno font-bold text-2xl mb-4 text-gray-800 uppercase tracking-wide">
                {challenge.title}
              </h2>
              
              <div className="mb-5">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">OBJECTIVE</h3>
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  {challenge.description}
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  STEP-BY-STEP TEST CASES
                </h3>
                <div className="space-y-2">
                  {challenge.testCases.map((test) => (
                    <div key={test.id} className="flex items-start gap-3 bg-white rounded-md p-3 border border-blue-100">
                      <div 
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white"
                        style={{ background: currentTheme.accent }}
                      >
                        {test.id}
                      </div>
                      <span className="text-sm text-gray-700 leading-snug font-medium pt-0.5">{test.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="rounded-lg shadow-md p-6 border-2"
                style={{
                  background: timeLeft < 60 ? "#fee2e2" : "#f0fdf4",
                  borderColor: timeLeft < 60 ? "#ef4444" : "#10b981",
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <Clock
                    className="w-8 h-8"
                    style={{ color: timeLeft < 60 ? "#ef4444" : "#10b981" }}
                  />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Time Left
                    </p>
                    <p
                      className="font-techno font-black text-4xl"
                      style={{ color: timeLeft < 60 ? "#ef4444" : "#10b981" }}
                    >
                      {formatTime(timeLeft)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <h3 className="font-techno font-bold text-sm mb-3 text-gray-800 uppercase tracking-wide">
                  Test Cases
                </h3>
                <div className="flex items-center justify-center gap-3">
                  {testResults.map((test) => (
                    <div
                      key={test.id}
                      className="flex items-center justify-center rounded-lg transition-all duration-300"
                      style={{
                        background: test.passed ? "#10b981" : "#ef4444",
                        width: "60px",
                        height: "60px",
                      }}
                    >
                      <span className="font-techno font-black text-2xl text-white">
                        {test.id}
                      </span>
                      {test.passed && (
                        <CheckCircle2 className="w-4 h-4 text-white ml-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleCompile}
                    disabled={isCompiling || !isRunning}
                    className="font-sans font-bold text-white uppercase rounded-lg py-2 px-6 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: isCompiling ? "#9CA3AF" : currentTheme.accent,
                      letterSpacing: "0.12em",
                      fontSize: "12px",
                    }}
                  >
                    <Play className="w-4 h-4" />
                    {isCompiling ? "COMPILING..." : "COMPILE"}
                  </button>

                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit || !isRunning}
                    className="font-sans font-bold text-white uppercase rounded-lg py-2 px-6 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: canSubmit ? "#10b981" : "#9CA3AF",
                      letterSpacing: "0.12em",
                      fontSize: "12px",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    SUBMIT
                  </button>

                  <button
                    onClick={handleExit}
                    className="font-sans font-bold text-white uppercase rounded-lg py-2 px-6 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    style={{
                      background: "#ef4444",
                      letterSpacing: "0.12em",
                      fontSize: "12px",
                    }}
                  >
                    <X className="w-4 h-4" />
                    EXIT
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden border border-gray-700 flex flex-col" style={{ height: "500px" }}>
                <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-gray-700">
                  <span className="text-gray-300 text-sm font-mono">script.js</span>
                  <span className="text-gray-500 text-xs">JavaScript</span>
                </div>
                
                <div className="flex-1 overflow-hidden">
                  <textarea
                    ref={editorRef}
                    value={code}
                    onChange={handleCodeChange}
                    className="w-full h-full bg-[#1e1e1e] text-gray-100 font-mono text-sm p-4 resize-none focus:outline-none"
                    style={{
                      tabSize: 4,
                      lineHeight: "1.6",
                    }}
                    spellCheck="false"
                  />
                </div>

                <div className="border-t border-gray-700">
                  <div
                    className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-[#3e3e42] transition-colors"
                    onClick={() => setIsConsoleOpen(!isConsoleOpen)}
                  >
                    <span className="text-gray-300 text-sm font-mono flex items-center gap-2">
                      <span className="text-yellow-500">▶</span> Console Output
                    </span>
                    {isConsoleOpen ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  {isConsoleOpen && (
                    <div className="bg-[#1e1e1e] overflow-y-auto p-4 space-y-2" style={{ height: "150px" }}>
                      {consoleOutput.length === 0 ? (
                        <p className="text-gray-500 text-sm font-mono">No output yet...</p>
                      ) : (
                        consoleOutput.map((log, index) => (
                          <div key={index} className="font-mono text-xs">
                            <span className="text-gray-500">[{log.timestamp}]</span>{" "}
                            <span
                              style={{
                                color:
                                  log.type === "error"
                                    ? "#ef4444"
                                    : log.type === "success"
                                    ? "#10b981"
                                    : log.type === "warning"
                                    ? "#f59e0b"
                                    : "#9CA3AF",
                              }}
                            >
                              {log.message}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col" style={{ height: "500px" }}>
                <div className="bg-green-50 px-4 py-2 border-b border-green-200">
                  <span className="text-green-700 text-sm font-semibold flex items-center gap-2">
                    <span className="text-green-600">✓</span> Expected Console Output
                  </span>
                </div>
                
                <div className="flex-1 overflow-auto p-4 bg-[#1e1e1e]">
                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-2 font-mono uppercase tracking-wider">What your output should look like:</div>
                    <div className="bg-[#2d2d30] border border-gray-600 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-gray-400 text-xs font-mono ml-2">console</span>
                      </div>
                      <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap leading-relaxed">{challenge.expectedOutputHint || challenge.expectedOutput}</pre>
                    </div>
                  </div>
                  <div className="bg-yellow-900/30 border border-yellow-600/30 rounded-lg p-3">
                    <p className="text-yellow-400 text-xs font-mono">
                      💡 Write code that produces this exact output. AI validates your solution — no copy-pasting!
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-700">
                  <div
                    className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-[#3e3e42] transition-colors"
                    onClick={() => setIsExpectedOpen(!isExpectedOpen)}
                  >
                    <span className="text-gray-300 text-sm font-semibold flex items-center gap-2">
                      <span className="text-blue-400">▶</span> Your Output (after compile)
                    </span>
                    {isExpectedOpen ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  {isExpectedOpen && (
                    <div className="bg-[#1e1e1e] overflow-auto p-4" style={{ height: "120px" }}>
                      {actualOutput ? (
                        <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">{actualOutput}</pre>
                      ) : (
                        <p className="text-gray-500 text-sm font-mono">Click COMPILE to see your output here...</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="font-techno font-bold text-2xl text-gray-900 mb-2 uppercase tracking-wide">
                Are you going to quit?
              </h2>
              <p className="text-gray-600 text-sm">
                Your progress will not be saved. Are you sure you want to exit?
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={cancelExit}
                className="flex-1 font-sans font-bold text-gray-700 uppercase rounded-lg py-3 px-6 transition-all duration-300 hover:scale-105 border-2 border-gray-300 hover:border-gray-400"
                style={{
                  letterSpacing: "0.12em",
                  fontSize: "13px",
                }}
              >
                CONTINUE
              </button>

              <button
                onClick={confirmExit}
                className="flex-1 font-sans font-bold text-white uppercase rounded-lg py-3 px-6 transition-all duration-300 hover:scale-105"
                style={{
                  background: "#ef4444",
                  letterSpacing: "0.12em",
                  fontSize: "13px",
                }}
              >
                EXIT
              </button>
            </div>
          </div>
        </div>
      )}

      {showResultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 border border-gray-200">
            <div className="text-center mb-6">
              {levelResult === 'win' ? (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="font-techno font-bold text-3xl text-gray-900 mb-3 uppercase tracking-wide">
                    🎉 Congratulations!
                  </h2>
                  <p className="text-gray-700 text-base mb-4">
                    You've successfully completed Level {levelNumber}!
                  </p>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg 
                        className="w-6 h-6" 
                        viewBox="0 0 24 24" 
                        fill="#3b82f6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                      </svg>
                      <span className="font-techno font-bold text-2xl text-blue-600">
                        50 XP
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Beginner Level Reward</p>
                  </div>
                  <button
                    onClick={handleClaimReward}
                    disabled={isClaimingReward || rewardClaimed}
                    className="w-full font-sans font-bold text-white uppercase rounded-lg py-4 px-6 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: rewardClaimed ? "#10b981" : "#3b82f6",
                      letterSpacing: "0.12em",
                      fontSize: "14px",
                    }}
                  >
                    {rewardClaimed ? "✓ REWARD CLAIMED" : isClaimingReward ? "CLAIMING..." : "CLAIM REWARD"}
                  </button>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-12 h-12 text-red-600" />
                  </div>
                  <h2 className="font-techno font-bold text-3xl text-gray-900 mb-3 uppercase tracking-wide">
                    Time's Up!
                  </h2>
                  <p className="text-gray-700 text-base mb-2">
                    Don't feel bad, you used your brain!
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    Be proud for trying. Every attempt makes you stronger! 💪
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => window.location.reload()}
                      className="flex-1 font-sans font-bold text-white uppercase rounded-lg py-4 px-6 transition-all duration-300 hover:scale-105"
                      style={{
                        background: "#3b82f6",
                        letterSpacing: "0.12em",
                        fontSize: "14px",
                      }}
                    >
                      TRY AGAIN
                    </button>
                    <button
                      onClick={() => navigate(`/levels/${course}/phase${phase}`)}
                      className="flex-1 font-sans font-bold text-white uppercase rounded-lg py-4 px-6 transition-all duration-300 hover:scale-105"
                      style={{
                        background: "#ef4444",
                        letterSpacing: "0.12em",
                        fontSize: "14px",
                      }}
                    >
                      QUIT
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JSLevelTemplate;
