import JavaPhase4LevelsPage from "../pages/java-phase4-levels";
import JavaLevel1Page from "../pages/java-phase4-levels/Level1";
import JavaLevel2Page from "../pages/java-phase4-levels/Level2";
import JavaLevel3Page from "../pages/java-phase4-levels/Level3";
import JavaLevel4Page from "../pages/java-phase4-levels/Level4";
import JavaLevel5Page from "../pages/java-phase4-levels/Level5";
import JavaLevel6Page from "../pages/java-phase4-levels/Level6";
import JavaLevel7Page from "../pages/java-phase4-levels/Level7";
import JavaLevel8Page from "../pages/java-phase4-levels/Level8";
import JavaLevel9Page from "../pages/java-phase4-levels/Level9";
import JavaLevel10Page from "../pages/java-phase4-levels/Level10";

export const javaPhase4Routes = [
  { path: "/levels/java/phase4", element: <JavaPhase4LevelsPage /> },
  { path: "/levels/java/phase4/level1", element: <JavaLevel1Page /> },
  { path: "/levels/java/phase4/level2", element: <JavaLevel2Page /> },
  { path: "/levels/java/phase4/level3", element: <JavaLevel3Page /> },
  { path: "/levels/java/phase4/level4", element: <JavaLevel4Page /> },
  { path: "/levels/java/phase4/level5", element: <JavaLevel5Page /> },
  { path: "/levels/java/phase4/level6", element: <JavaLevel6Page /> },
  { path: "/levels/java/phase4/level7", element: <JavaLevel7Page /> },
  { path: "/levels/java/phase4/level8", element: <JavaLevel8Page /> },
  { path: "/levels/java/phase4/level9", element: <JavaLevel9Page /> },
  { path: "/levels/java/phase4/level10", element: <JavaLevel10Page /> }
];
