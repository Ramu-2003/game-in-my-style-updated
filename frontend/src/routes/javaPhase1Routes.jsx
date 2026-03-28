import JavaPhase1LevelsPage from "../pages/java-phase1-levels";
import JavaLevel1Page from "../pages/java-phase1-levels/Level1";
import JavaLevel2Page from "../pages/java-phase1-levels/Level2";
import JavaLevel3Page from "../pages/java-phase1-levels/Level3";
import JavaLevel4Page from "../pages/java-phase1-levels/Level4";
import JavaLevel5Page from "../pages/java-phase1-levels/Level5";
import JavaLevel6Page from "../pages/java-phase1-levels/Level6";
import JavaLevel7Page from "../pages/java-phase1-levels/Level7";
import JavaLevel8Page from "../pages/java-phase1-levels/Level8";
import JavaLevel9Page from "../pages/java-phase1-levels/Level9";
import JavaLevel10Page from "../pages/java-phase1-levels/Level10";

export const javaPhase1Routes = [
  { path: "/levels/java/phase1", element: <JavaPhase1LevelsPage /> },
  { path: "/levels/java/phase1/level1", element: <JavaLevel1Page /> },
  { path: "/levels/java/phase1/level2", element: <JavaLevel2Page /> },
  { path: "/levels/java/phase1/level3", element: <JavaLevel3Page /> },
  { path: "/levels/java/phase1/level4", element: <JavaLevel4Page /> },
  { path: "/levels/java/phase1/level5", element: <JavaLevel5Page /> },
  { path: "/levels/java/phase1/level6", element: <JavaLevel6Page /> },
  { path: "/levels/java/phase1/level7", element: <JavaLevel7Page /> },
  { path: "/levels/java/phase1/level8", element: <JavaLevel8Page /> },
  { path: "/levels/java/phase1/level9", element: <JavaLevel9Page /> },
  { path: "/levels/java/phase1/level10", element: <JavaLevel10Page /> }
];
