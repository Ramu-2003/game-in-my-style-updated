import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Edit2, Check } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { DailyRewards } from "../components/DailyRewards";
import { Footer } from "../components/landing/Footer";
import { CustomCursor } from "../components/landing/CustomCursor";
import { profileAPI, levelsAPI } from "../utils/api";

const PAGE_BG = "#FFFFFF";

// Profile images - Add your image filenames here
const PROFILE_IMAGES = [
  "/assets/profile-images/human-00.png",
  "/assets/profile-images/human-01.png",
  "/assets/profile-images/human-02.png",
  "/assets/profile-images/human-03.png",
  "/assets/profile-images/human-04.png",
  "/assets/profile-images/human-05.png",
  "/assets/profile-images/human-06.png",
  "/assets/profile-images/human-07.png",
  "/assets/profile-images/human-08.png",
  "/assets/profile-images/human-09.png",
  "/assets/profile-images/human-10.png",
  "/assets/profile-images/human-11.png",
  "/assets/profile-images/human-12.png",
  "/assets/profile-images/human-13.png",
  "/assets/profile-images/human-14.png",
  "/assets/profile-images/human-15.png",
  "/assets/profile-images/human-16.png",
  "/assets/profile-images/human-17.png",
  "/assets/profile-images/human-18.png",
  "/assets/profile-images/human-19.png",
  "/assets/profile-images/human-20.png",
  "/assets/profile-images/human-21.png",
  "/assets/profile-images/human-22.png",
  "/assets/profile-images/human-23.png",
  "/assets/profile-images/human-24.png",
  "/assets/profile-images/human-25.png",
  "/assets/profile-images/human-26.png",
  "/assets/profile-images/human-27.png",
  "/assets/profile-images/human-28.png",
  "/assets/profile-images/human-29.png",
  "/assets/profile-images/human-30.png",
  "/assets/profile-images/human-31.png",
  "/assets/profile-images/human-32.png",
  "/assets/profile-images/human-33.png",
  "/assets/profile-images/human-34.png",
  "/assets/profile-images/human-35.png",
  "/assets/profile-images/human-36.png",
  "/assets/profile-images/human-37.png",
  "/assets/profile-images/human-38.png",
  "/assets/profile-images/human-39.png",
  "/assets/profile-images/human-40.png",
  "/assets/profile-images/human-41.png",
  "/assets/profile-images/human-42.png",
  "/assets/profile-images/human-43.png",
  "/assets/profile-images/human-44.png",
  "/assets/profile-images/human-45.png",
  "/assets/profile-images/human-46.png",
  "/assets/profile-images/human-47.png",
  "/assets/profile-images/human-48.png",
  "/assets/profile-images/human-49.png",
  "/assets/profile-images/human-50.png",
  "/assets/profile-images/human-51.png",
  "/assets/profile-images/human-52.png",
  "/assets/profile-images/human-53.png",
  "/assets/profile-images/human-54.png",
  "/assets/profile-images/human-55.png",
  "/assets/profile-images/human-56.png",
  "/assets/profile-images/human-57.png",
  "/assets/profile-images/human-58.png",
  "/assets/profile-images/human-59.png",
  "/assets/profile-images/human-60.png",
  "/assets/profile-images/human-61.png",
  "/assets/profile-images/human-62.png",
  "/assets/profile-images/human-63.png",
  "/assets/profile-images/human-64.png",
  "/assets/profile-images/human-65.png",
  "/assets/profile-images/human-66.png",
  "/assets/profile-images/human-67.png",
  "/assets/profile-images/human-68.png",
  "/assets/profile-images/human-69.png",
  "/assets/profile-images/human-70.png",
  "/assets/profile-images/human-71.png",
  "/assets/profile-images/human-72.png",
  "/assets/profile-images/human-73.png",
  "/assets/profile-images/human-74.png",
  "/assets/profile-images/human-75.png",
  "/assets/profile-images/human-76.png",
  "/assets/profile-images/human-77.png",
  "/assets/profile-images/human-78.png",
  "/assets/profile-images/human-79.png",
  "/assets/profile-images/human-80.png",
  "/assets/profile-images/human-81.png",
  "/assets/profile-images/human-82.png",
  "/assets/profile-images/human-83.png",
  "/assets/profile-images/human-84.png",
  "/assets/profile-images/human-85.png",
  "/assets/profile-images/human-86.png",
  "/assets/profile-images/human-87.png",
  "/assets/profile-images/human-88.png",
  "/assets/profile-images/human-89.png",
  "/assets/profile-images/human-90.png",
  "/assets/profile-images/human-91.png",
  "/assets/profile-images/human-92.png",
  "/assets/profile-images/human-93.png",
  "/assets/profile-images/human-94.png",
  "/assets/profile-images/human-95.png",
  "/assets/profile-images/human-96.png",
  "/assets/profile-images/human-97.png",
  "/assets/profile-images/human-98.png",
  "/assets/profile-images/human-99.png",
  "/assets/profile-images/human-100.png",
];

const ProfilePage = () => {
  const navigate = useNavigate();
  const [themeKey, setThemeKey] = useState("purple");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSetupMode, setIsSetupMode] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [uid, setUid] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("Add some things about you");
  const [selectedImage, setSelectedImage] = useState(PROFILE_IMAGES[0]);
  const [tempFullName, setTempFullName] = useState("");
  const [tempUsername, setTempUsername] = useState("");
  const [tempGender, setTempGender] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [tempImage, setTempImage] = useState(PROFILE_IMAGES[0]);
  const [rankPoints, setRankPoints] = useState(0);
  const [nameChangeCount, setNameChangeCount] = useState(0);
  const maxNameChanges = 3;
  const [isPublic, setIsPublic] = useState(true);
  const [searchUid, setSearchUid] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isViewingOther, setIsViewingOther] = useState(false);

  // Bot stats for pentagon graphs
  const botNames = ["Beginner Bot", "Lazy Compiler", "Logic Bot", "Flash Coder", "Test Case Destroyer"];
  const [winsVsBots] = useState([0, 0, 0, 0, 0]); // Wins against each bot
  const [lossesVsBots] = useState([0, 0, 0, 0, 0]); // Losses against each bot

  // Course progress - 10 phases per course
  const [htmlPhases, setHtmlPhases] = useState(Array(10).fill(0)); // 10 phases for HTML
  const [cssPhases, setCssPhases] = useState(Array(10).fill(0)); // 10 phases for CSS
  const [jsPhases, setJsPhases] = useState(Array(10).fill(0)); // 10 phases for JavaScript
  const [pythonPhases, setPythonPhases] = useState(Array(10).fill(0)); // 10 phases for Python
  const [javaPhases, setJavaPhases] = useState(Array(10).fill(0)); // 10 phases for Java

  // Calculate total wins and losses
  const totalWins = winsVsBots.reduce((sum, wins) => sum + wins, 0);
  const totalLosses = lossesVsBots.reduce((sum, losses) => sum + losses, 0);

  // Pentagon graph for bot stats (original)
  const PentagonGraph = ({ data, color }) => {
    const size = 200;
    const center = size / 2;
    const radius = 60;
    const maxValue = 5;
    
    const points = data.map((value, index) => {
      const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
      const distance = (value / maxValue) * radius;
      const x = center + distance * Math.cos(angle);
      const y = center + distance * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    const outerPoints = data.map((_, index) => {
      const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={size} height={size} className="mx-auto">
        <polygon points={outerPoints} fill="none" stroke="#e5e7eb" strokeWidth="1" />
        <polygon points={points} fill={`${color}50`} stroke={color} strokeWidth="2" />
        <circle cx={center} cy={center} r="2" fill="#9ca3af" />
      </svg>
    );
  };

  // Split Pentagon - shows 10 phases split into two halves (phases 1-5 and 6-10)
  const SplitPentagonGraph = ({ phases, courseName, color }) => {
    const size = 160;
    const center = size / 2;
    const radius = 60;
    
    // Calculate 5 pentagon points
    const pentagonPoints = Array.from({ length: 5 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return { x, y };
    });
    
    // Create path for outer pentagon
    const outerPath = pentagonPoints.map((p, i) => 
      `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`
    ).join(' ') + ' Z';
    
    // Determine which points are on left vs right of center
    const leftPoints = pentagonPoints.filter(p => p.x <= center);
    const rightPoints = pentagonPoints.filter(p => p.x > center);
    
    // Calculate average completion for left half (phases 1-5) and right half (phases 6-10)
    const leftCompletion = phases.slice(0, 5).reduce((sum, p) => sum + p, 0) / 50; // 0 to 1 (5 phases * 10 levels = 50)
    const rightCompletion = phases.slice(5, 10).reduce((sum, p) => sum + p, 0) / 50; // 0 to 1
    
    return (
      <div className="flex flex-col items-center">
        <svg width={size} height={size}>
          {/* Outer pentagon border */}
          <path
            d={outerPath}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          
          {/* Left half fill (phases 1-5) */}
          {leftCompletion > 0 && (
            <path
              d={`M ${center},${center - radius} L ${pentagonPoints[4].x},${pentagonPoints[4].y} L ${center},${center + radius} L ${center},${center} Z`}
              fill={`${color}${Math.floor(leftCompletion * 100)}`}
              stroke={color}
              strokeWidth="1"
              opacity={0.6 + leftCompletion * 0.4}
            />
          )}
          
          {/* Right half fill (phases 6-10) */}
          {rightCompletion > 0 && (
            <path
              d={`M ${center},${center - radius} L ${pentagonPoints[1].x},${pentagonPoints[1].y} L ${pentagonPoints[2].x},${pentagonPoints[2].y} L ${center},${center + radius} L ${center},${center} Z`}
              fill={`${color}${Math.floor(rightCompletion * 100)}`}
              stroke={color}
              strokeWidth="1"
              opacity={0.6 + rightCompletion * 0.4}
            />
          )}
          
          {/* Center point */}
          <circle cx={center} cy={center} r="3" fill={color} />
          
          {/* Dividing line (vertical) to show split */}
          <line 
            x1={center} 
            y1={center - radius} 
            x2={center} 
            y2={center + radius} 
            stroke="#4b5563" 
            strokeWidth="2" 
            strokeDasharray="4,4"
          />
        </svg>
        <p className="text-sm font-bold mt-3" style={{ color }}>{courseName}</p>
        <div className="flex gap-4 mt-1 text-xs text-gray-500">
          <span>P1-5: {phases.slice(0, 5).reduce((sum, p) => sum + p, 0)}/50</span>
          <span>P6-10: {phases.slice(5, 10).reduce((sum, p) => sum + p, 0)}/50</span>
        </div>
      </div>
    );
  };

  // Rank tiers with point ranges and colors
  const RANK_TIERS = [
    { name: "WOOD", min: 0, max: 500, color: "#8B4513", icon: "🪵" },
    { name: "BRONZE", min: 500, max: 1000, color: "#CD7F32", icon: "🥉" },
    { name: "SILVER", min: 1000, max: 1500, color: "#C0C0C0", icon: "🥈"},
    { name: "GOLD", min: 1500, max: 2000, color: "#FFD700", icon: "🌟"},
    { name: "PLATINUM", min: 2000, max: 2500, color: "#E5E4E2", icon: "💎" },
    { name: "DIAMOND", min: 2500, max: 3000, color: "#B9F2FF", icon: "💠" },
    { name: "MASTER", min: 3000, max: 3500, color: "#9D00FF", icon: "👑" },
    { name: "GRANDMASTER", min: 3500, max: 4000, color: "#FF1493", icon: "⚡" },
    { name: "CHAMPION", min: 4000, max: Infinity, color: "#FF4500", icon: "🏆" },
  ];

  const getCurrentRank = (points) => {
    return RANK_TIERS.find(tier => points >= tier.min && points < tier.max) || RANK_TIERS[0];
  };

  const getProgressToNextRank = (points) => {
    const currentRank = getCurrentRank(points);
    const nextRank = RANK_TIERS[RANK_TIERS.indexOf(currentRank) + 1];
    
    if (!nextRank) return { percentage: 100, pointsNeeded: 0, nextRankName: "MAX" };
    
    const pointsInCurrentTier = points - currentRank.min;
    const tierRange = currentRank.max - currentRank.min;
    const percentage = Math.floor((pointsInCurrentTier / tierRange) * 100);
    const pointsNeeded = currentRank.max - points;
    
    return { percentage, pointsNeeded, nextRankName: nextRank.name };
  };

  const currentRank = getCurrentRank(rankPoints);
  const progress = getProgressToNextRank(rankPoints);

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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const [profileResponse, levelsResponse] = await Promise.all([
          profileAPI.getProfile(),
          levelsAPI.getProgress()
        ]);
        
        const userData = profileResponse.data.user;
        const levelProgress = levelsResponse.data.levelProgress;
        
        // Update level progress for split pentagon graphs
        if (levelProgress) {
          // For each course, get completion status for all 10 phases
          // Each phase has 10 levels, so we track how many levels completed per phase
          
          // HTML phases
          const htmlPhasesData = Array(10).fill(0).map((_, phaseIdx) => {
            const phaseNum = phaseIdx + 1;
            const completed = levelProgress.html?.[`phase${phaseNum}`] || 0;
            return Math.min(completed > 0 ? completed - 1 : 0, 10);
          });
          setHtmlPhases(htmlPhasesData);
          
          // CSS phases
          const cssPhasesData = Array(10).fill(0).map((_, phaseIdx) => {
            const phaseNum = phaseIdx + 1;
            const completed = levelProgress.css?.[`phase${phaseNum}`] || 0;
            return Math.min(completed > 0 ? completed - 1 : 0, 10);
          });
          setCssPhases(cssPhasesData);
          
          // JavaScript phases
          const jsPhasesData = Array(10).fill(0).map((_, phaseIdx) => {
            const phaseNum = phaseIdx + 1;
            const completed = levelProgress.javascript?.[`phase${phaseNum}`] || 0;
            return Math.min(completed > 0 ? completed - 1 : 0, 10);
          });
          setJsPhases(jsPhasesData);
          
          // Python phases
          const pythonPhasesData = Array(10).fill(0).map((_, phaseIdx) => {
            const phaseNum = phaseIdx + 1;
            const completed = levelProgress.python?.[`phase${phaseNum}`] || 0;
            return Math.min(completed > 0 ? completed - 1 : 0, 10);
          });
          setPythonPhases(pythonPhasesData);
          
          // Java phases
          const javaPhasesData = Array(10).fill(0).map((_, phaseIdx) => {
            const phaseNum = phaseIdx + 1;
            const completed = levelProgress.java?.[`phase${phaseNum}`] || 0;
            return Math.min(completed > 0 ? completed - 1 : 0, 10);
          });
          setJavaPhases(javaPhasesData);
        }
        
        // Check if profile setup is complete
        if (!userData.profileSetupComplete || !userData.username) {
          setIsSetupMode(true);
          setIsEditing(true);
          setUid(""); // No UID yet
          setFullName(userData.name || "");
          setTempFullName(userData.name || "");
          setTempUsername("");
          setTempGender("");
          setTempBio("Add some things about you");
          setTempImage(PROFILE_IMAGES[0]);
        } else {
          // Load existing profile
          setFullName(userData.name);
          setUsername(userData.username);
          setUid(userData.uid);
          setGender(userData.gender || "");
          setBio(userData.bio);
          setSelectedImage(userData.profileImage);
          setIsPublic(userData.isPublic);
          setNameChangeCount(userData.nameChangeCount);
          setRankPoints(userData.rankPoints);
          setTempFullName(userData.name);
          setTempUsername(userData.username);
          setTempGender(userData.gender || "");
          setTempBio(userData.bio);
          setTempImage(userData.profileImage);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/auth');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSearch = async () => {
    if (!searchUid.trim()) {
      alert("Please enter a UID to search");
      return;
    }

    if (searchUid === uid) {
      alert("This is your own profile!");
      return;
    }

    try {
      const response = await profileAPI.searchUserByUid(searchUid);
      const foundUser = response.data.user;
      
      setSearchResult({
        fullName: foundUser.name,
        username: foundUser.username,
        uid: foundUser.uid,
        bio: foundUser.bio,
        image: foundUser.profileImage,
        rankPoints: foundUser.rankPoints,
        isPublic: true
      });
      setIsViewingOther(true);
    } catch (error) {
      if (error.response?.status === 404) {
        alert("User not found with UID: " + searchUid);
      } else if (error.response?.status === 403) {
        alert("This user's profile is private and cannot be viewed.");
      } else {
        alert("Error searching for user. Please try again.");
      }
      console.error('Search error:', error);
    }
  };

  const handleBackToMyProfile = () => {
    setIsViewingOther(false);
    setSearchResult(null);
    setSearchUid("");
  };

  const handleSave = async () => {
    if (!tempFullName.trim() || !tempUsername.trim()) {
      alert("Full name and username are required");
      return;
    }

    if (isSetupMode && !tempGender) {
      alert("Please select your gender");
      return;
    }

    const nameChanged = (tempFullName !== fullName) || (tempUsername !== username);
    
    if (!isSetupMode && nameChanged && nameChangeCount >= maxNameChanges) {
      alert(`You have reached the maximum limit of ${maxNameChanges} name changes.`);
      return;
    }

    try {
      let response;
      
      if (isSetupMode) {
        // First time profile setup
        response = await profileAPI.setupProfile({
          fullName: tempFullName,
          username: tempUsername,
          gender: tempGender,
          bio: tempBio,
          profileImage: tempImage
        });
        setIsSetupMode(false);
        alert("Profile setup complete! Welcome to Game in My Style!");
      } else {
        // Update existing profile
        response = await profileAPI.updateProfile({
          fullName: tempFullName,
          username: tempUsername,
          bio: tempBio,
          profileImage: tempImage,
          isPublic: isPublic
        });
      }

      const userData = response.data.user;
      
      // Update state with new data
      setFullName(userData.name);
      setUsername(userData.username);
      setUid(userData.uid); // Update UID from response
      setGender(userData.gender);
      setBio(userData.bio);
      setSelectedImage(userData.profileImage);
      setNameChangeCount(userData.nameChangeCount);
      setIsPublic(userData.isPublic);
      
      setIsEditing(false);
      
      // Dispatch event to update Dashboard
      window.dispatchEvent(new Event('profileUpdated'));
    } catch (error) {
      console.error('Save profile error:', error);
      console.error('Error response:', error.response);
      
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem('token');
        navigate('/auth');
      } else if (error.message) {
        alert("Error: " + error.message);
      } else {
        alert("Error saving profile. Please try again.");
      }
    }
  };

  const handleCancel = () => {
    if (isSetupMode) {
      alert("You must complete your profile setup to continue");
      return;
    }
    
    setTempFullName(fullName);
    setTempUsername(username);
    setTempBio(bio);
    setTempImage(selectedImage);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: PAGE_BG }}>
      <CustomCursor theme={currentTheme} />

      <Navbar 
        currentPage="profile"
        themeKey={themeKey}
        setThemeKey={setThemeKey}
        themes={themes}
        currentTheme={currentTheme}
      />

      <main className="flex-1 px-6 py-14 sm:px-10">
        <div className="max-w-4xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-current border-r-transparent mb-4" style={{ color: currentTheme.accent }}></div>
                <p className="text-gray-600 font-techno">Loading profile...</p>
              </div>
            </div>
          ) : (
            <>
          {/* Search Bar */}
          {!isSetupMode && (
          <div className="mb-6 flex items-center gap-3">
            <div 
              className="flex-1 flex items-center gap-3 rounded-full px-6 py-3.5 shadow-lg transition-all duration-300"
              style={{ 
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)",
                border: `2px solid ${currentTheme.accent}40`,
                boxShadow: `0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px ${currentTheme.accent}10`
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: currentTheme.accent }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchUid}
                onChange={(e) => setSearchUid(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                placeholder="Search user by UID (e.g., 123456)"
                className="flex-1 bg-transparent text-gray-700 font-mono text-sm placeholder-gray-400"
                style={{ outline: "none", border: "none" }}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              {searchUid && (
                <button
                  onClick={() => {
                    setSearchUid('');
                    if (isViewingOther) {
                      handleBackToMyProfile();
                    }
                  }}
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all hover:bg-gray-200"
                  style={{ color: '#9ca3af' }}
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
              <button
                onClick={handleSearch}
                className="px-5 py-2 rounded-full font-techno font-bold text-white text-xs uppercase transition-all hover:scale-105 hover:shadow-lg flex-shrink-0"
                style={{ 
                  background: `linear-gradient(135deg, ${currentTheme.accent} 0%, ${currentTheme.ui} 100%)`,
                  boxShadow: `0 2px 8px ${currentTheme.accent}40`
                }}
              >
                SEARCH
              </button>
            </div>
            {isViewingOther && (
              <button
                onClick={handleBackToMyProfile}
                className="px-6 py-3.5 rounded-full font-techno font-bold text-white text-xs uppercase transition-all hover:scale-105 shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                MY PROFILE
              </button>
            )}
          </div>
          )}

          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.accent}15 0%, ${currentTheme.accent}08 100%)`,
              border: `2px solid ${currentTheme.accent}30`,
            }}
          >
            <div className="px-8 py-8 flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden border-4"
                    style={{ borderColor: currentTheme.accent }}
                  >
                    <img
                      src={isViewingOther ? searchResult.image : (isEditing ? tempImage : selectedImage)}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  {isEditing && !isViewingOther && (
                    <button
                      className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                      style={{ color: currentTheme.accent }}
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="flex-1">
                  {isSetupMode && (
                    <div className="mb-4 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                      <p className="text-blue-800 font-techno text-sm font-bold mb-1">👋 Welcome! Complete Your Profile</p>
                      <p className="text-blue-600 text-xs">Enter your full name and choose a unique username. Your 6-digit UID will be generated automatically.</p>
                    </div>
                  )}
                  {isViewingOther ? (
                    <>
                      <h1 className="font-techno text-2xl font-bold text-gray-900 mb-1">
                        {searchResult.fullName}
                      </h1>
                      <p className="text-sm text-gray-500 font-mono mb-1">@{searchResult.username}</p>
                      <p className="text-xs text-gray-400 font-mono mb-3">UID: {searchResult.uid}</p>
                      <p className="text-gray-700 leading-relaxed">{searchResult.bio}</p>
                    </>
                  ) : isEditing ? (
                    <>
                      <input
                        type="text"
                        value={tempFullName}
                        onChange={(e) => setTempFullName(e.target.value)}
                        placeholder={isSetupMode ? "Enter your full name" : "Full Name"}
                        className="font-techno text-2xl font-bold text-gray-900 bg-white rounded-lg px-4 py-2 border-2 w-full mb-2"
                        style={{ borderColor: currentTheme.accent }}
                        disabled={!isSetupMode && nameChangeCount >= maxNameChanges}
                      />
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-500">@</span>
                        <input
                          type="text"
                          value={tempUsername}
                          onChange={(e) => setTempUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                          placeholder={isSetupMode ? "enter_your_username" : "username"}
                          className="text-sm text-gray-500 font-mono bg-white rounded px-2 py-1 border-2 flex-1"
                          style={{ borderColor: currentTheme.accent }}
                          disabled={!isSetupMode && nameChangeCount >= maxNameChanges}
                        />
                      </div>
                      {isSetupMode && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-600 font-semibold mb-2">Select Gender:</p>
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setTempGender('male')}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all hover:scale-105"
                              style={{
                                borderColor: tempGender === 'male' ? currentTheme.accent : '#e5e7eb',
                                background: tempGender === 'male' ? `${currentTheme.accent}15` : 'white',
                                color: tempGender === 'male' ? currentTheme.accent : '#6b7280'
                              }}
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="10" cy="14" r="6" />
                                <line x1="16" y1="8" x2="22" y2="2" />
                                <line x1="22" y1="2" x2="18" y2="2" />
                                <line x1="22" y1="2" x2="22" y2="6" />
                              </svg>
                              <span className="font-techno font-bold text-sm">MALE</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setTempGender('female')}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all hover:scale-105"
                              style={{
                                borderColor: tempGender === 'female' ? currentTheme.accent : '#e5e7eb',
                                background: tempGender === 'female' ? `${currentTheme.accent}15` : 'white',
                                color: tempGender === 'female' ? currentTheme.accent : '#6b7280'
                              }}
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="9" r="6" />
                                <line x1="12" y1="15" x2="12" y2="22" />
                                <line x1="9" y1="19" x2="15" y2="19" />
                              </svg>
                              <span className="font-techno font-bold text-sm">FEMALE</span>
                            </button>
                          </div>
                        </div>
                      )}
                      {!isSetupMode && nameChangeCount >= maxNameChanges && (
                        <p className="text-xs text-red-600 mb-2">⚠️ Maximum name changes reached ({maxNameChanges}/{maxNameChanges})</p>
                      )}
                      {!isSetupMode && nameChangeCount < maxNameChanges && (
                        <p className="text-xs text-gray-500 mb-2">Name changes remaining: {maxNameChanges - nameChangeCount}/{maxNameChanges}</p>
                      )}
                      {!isSetupMode && uid && (
                        <p className="text-xs text-gray-400 font-mono mb-3">UID: {uid}</p>
                      )}
                      {isSetupMode && (
                        <p className="text-xs text-gray-400 font-mono mb-3">UID will be generated after setup</p>
                      )}
                    </>
                  ) : (
                    <>
                      <h1 className="font-techno text-2xl font-bold text-gray-900 mb-1">
                        {fullName}
                      </h1>
                      <p className="text-sm text-gray-500 font-mono mb-1">@{username}</p>
                      <p className="text-xs text-gray-400 font-mono mb-3">UID: {uid}</p>
                    </>
                  )}
                  
                  {!isViewingOther && (isEditing ? (
                    <textarea
                      value={tempBio}
                      onChange={(e) => setTempBio(e.target.value)}
                      placeholder="Add some things about you"
                      className="w-full text-gray-700 bg-white rounded-lg px-4 py-3 border-2 resize-none"
                      style={{ borderColor: currentTheme.accent }}
                      rows={3}
                    />
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{bio}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {!isViewingOther && (isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full font-techno font-bold text-white uppercase transition-all hover:scale-105"
                      style={{ background: currentTheme.accent, fontSize: "12px", letterSpacing: "0.1em" }}
                    >
                      <Check className="w-4 h-4" />
                      SAVE
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-6 py-2.5 rounded-full font-techno font-bold text-gray-600 uppercase transition-all hover:scale-105 bg-gray-200"
                      style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                    >
                      CANCEL
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full font-techno font-bold text-white uppercase transition-all hover:scale-105"
                      style={{ background: currentTheme.accent, fontSize: "12px", letterSpacing: "0.1em" }}
                    >
                      <Edit2 className="w-4 h-4" />
                      EDIT
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          const newIsPublic = !isPublic;
                          await profileAPI.updateProfile({ isPublic: newIsPublic });
                          setIsPublic(newIsPublic);
                        } catch (error) {
                          alert("Error updating privacy setting");
                          console.error('Privacy toggle error:', error);
                        }
                      }}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full font-techno font-bold text-white uppercase transition-all hover:scale-105"
                      style={{ background: isPublic ? "#10B981" : "#6B7280", fontSize: "12px", letterSpacing: "0.1em" }}
                    >
                      {isPublic ? "PUBLIC" : "PRIVATE"}
                    </button>
                  </>
                ))}
              </div>
            </div>

            {!isViewingOther && isEditing && (
              <div className="px-8 pb-8">
                <p className="font-techno text-sm font-bold uppercase mb-4" style={{ color: currentTheme.accent, letterSpacing: "0.1em" }}>
                  Select Profile Image
                </p>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-3 max-h-96 overflow-y-auto pr-2">
                  {PROFILE_IMAGES.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTempImage(img)}
                      className="w-16 h-16 rounded-full overflow-hidden border-3 transition-all hover:scale-110"
                      style={{
                        borderColor: tempImage === img ? currentTheme.accent : "#e5e7eb",
                        opacity: tempImage === img ? 1 : 0.6,
                        boxShadow: tempImage === img ? `0 0 12px ${currentTheme.accent}80` : 'none',
                      }}
                    >
                      <img
                        src={img}
                        alt={`Profile ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6 px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-techno text-sm font-bold uppercase" style={{ color: currentTheme.accent, letterSpacing: "0.1em" }}>
                      League Rank
                    </h3>
                    <svg className="w-5 h-5" style={{ color: currentRank.color }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: `${currentRank.color}20` }}>
                      <div className="text-4xl">{currentRank.icon}</div>
                    </div>
                    <p className="font-techno text-2xl font-black mb-1" style={{ color: currentRank.color }}>{currentRank.name}</p>
                    <p className="text-xs text-gray-500 font-mono">{rankPoints} Rank Points</p>
                    
                    {progress.nextRankName !== "MAX" && (
                      <div className="mt-4">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progress to {progress.nextRankName}</span>
                          <span>{progress.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress.percentage}%`, background: currentRank.color }} />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">{progress.pointsNeeded} points needed</p>
                      </div>
                    )}
                    
                    {progress.nextRankName === "MAX" && (
                      <div className="mt-4">
                        <p className="text-xs font-bold text-gray-700">🏆 MAX RANK ACHIEVED 🏆</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-techno text-sm font-bold uppercase" style={{ color: currentTheme.accent, letterSpacing: "0.1em" }}>
                      Rank Tiers
                    </h3>
                    <svg className="w-5 h-5" style={{ color: currentTheme.accent }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                    </svg>
                  </div>
                  <div className="space-y-1.5 max-h-80 overflow-y-auto pr-2">
                    {RANK_TIERS.map((tier) => (
                      <div 
                        key={tier.name} 
                        className={`flex items-center justify-between px-3 py-2.5 rounded transition-all ${rankPoints >= tier.min && rankPoints < tier.max ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{tier.icon}</span>
                          <span className="text-sm font-bold" style={{ color: tier.color }}>{tier.name}</span>
                        </div>
                        <span className="text-xs text-gray-500 font-mono">
                          {tier.min} - {tier.max === Infinity ? '∞' : tier.max}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="font-techno text-sm font-bold uppercase mb-4" style={{ color: currentTheme.accent, letterSpacing: "0.1em" }}>
                      Computer Mode
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${currentTheme.accent}20` }}>
                            <svg className="w-4 h-4" style={{ color: currentTheme.accent }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-600">Wins vs AI</span>
                        </div>
                        <div className="text-right">
                          <p className="font-techno text-2xl font-black" style={{ color: currentTheme.accent }}>{totalWins}</p>
                        </div>
                      </div>
                      <PentagonGraph data={winsVsBots} color={currentTheme.accent} phaseNumber={null} />
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600">
                        {botNames.map((name, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ background: currentTheme.accent }}></div>
                            <span className="truncate">{name}: {winsVsBots[idx]}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 my-4"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100">
                            <svg className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-600">Losses vs AI</span>
                        </div>
                        <div className="text-right">
                          <p className="font-techno text-2xl font-black text-gray-700">{totalLosses}</p>
                        </div>
                      </div>
                      <PentagonGraph data={lossesVsBots} color="#ef4444" phaseNumber={null} />
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600">
                        {botNames.map((name, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="truncate">{name}: {lossesVsBots[idx]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Daily Rewards Section */}
                  <DailyRewards theme={currentTheme} />
                </div>

                {/* Levels Mode Progress - Right Side */}
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <h3 className="font-techno text-lg font-bold uppercase mb-6 text-center" style={{ color: currentTheme.accent, letterSpacing: "0.15em" }}>
                    Levels Mode
                  </h3>
                  <div className="space-y-6">
                    <SplitPentagonGraph phases={htmlPhases} courseName="HTML" color="#ff5252" />
                    <SplitPentagonGraph phases={cssPhases} courseName="CSS" color="#0099ff" />
                    <SplitPentagonGraph phases={jsPhases} courseName="JAVASCRIPT" color="#f7df1e" />
                    <SplitPentagonGraph phases={pythonPhases} courseName="PYTHON" color="#3776ab" />
                    <SplitPentagonGraph phases={javaPhases} courseName="JAVA" color="#f89820" />
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center font-semibold">500 Total Levels</p>
                    <p className="text-xs text-gray-500 text-center mt-1">5 Courses × 10 Phases × 10 Levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
          )}
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

export default ProfilePage;
