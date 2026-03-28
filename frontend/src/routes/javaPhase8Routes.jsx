import JavaPhase8LevelsPage from "../pages/java-phase8-levels";
import JavaLevel1Page from "../pages/java-phase8-levels/Level1";
import JavaLevel2Page from "../pages/java-phase8-levels/Level2";
import JavaLevel3Page from "../pages/java-phase8-levels/Level3";
import JavaLevel4Page from "../pages/java-phase8-levels/Level4";
import JavaLevel5Page from "../pages/java-phase8-levels/Level5";
import JavaLevel6Page from "../pages/java-phase8-levels/Level6";
import JavaLevel7Page from "../pages/java-phase8-levels/Level7";
import JavaLevel8Page from "../pages/java-phase8-levels/Level8";
import JavaLevel9Page from "../pages/java-phase8-levels/Level9";
import JavaLevel10Page from "../pages/java-phase8-levels/Level10";

export const javaPhase8Routes = [
  { path: "/levels/java/phase8", element: <JavaPhase8LevelsPage /> },
  { path: "/levels/java/phase8/level1", element: <JavaLevel1Page /> },
  { path: "/levels/java/phase8/level2", element: <JavaLevel2Page /> },
  { path: "/levels/java/phase8/level3", element: <JavaLevel3Page /> },
  { path: "/levels/java/phase8/level4", element: <JavaLevel4Page /> },
  { path: "/levels/java/phase8/level5", element: <JavaLevel5Page /> },
  { path: "/levels/java/phase8/level6", element: <JavaLevel6Page /> },
  { path: "/levels/java/phase8/level7", element: <JavaLevel7Page /> },
  { path: "/levels/java/phase8/level8", element: <JavaLevel8Page /> },
  { path: "/levels/java/phase8/level9", element: <JavaLevel9Page /> },
  { path: "/levels/java/phase8/level10", element: <JavaLevel10Page /> }
];
