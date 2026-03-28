import HTMLPhase1LevelsPage from "../pages/html-phase1-levels";
import HTMLLevel1Page from "../pages/html-phase1-levels/Level1";
import HTMLLevel2Page from "../pages/html-phase1-levels/Level2";
import HTMLLevel3Page from "../pages/html-phase1-levels/Level3";
import HTMLLevel4Page from "../pages/html-phase1-levels/Level4";
import HTMLLevel5Page from "../pages/html-phase1-levels/Level5";
import HTMLLevel6Page from "../pages/html-phase1-levels/Level6";
import HTMLLevel7Page from "../pages/html-phase1-levels/Level7";
import HTMLLevel8Page from "../pages/html-phase1-levels/Level8";
import HTMLLevel9Page from "../pages/html-phase1-levels/Level9";
import HTMLLevel10Page from "../pages/html-phase1-levels/Level10";

export const htmlPhase1Routes = [
  { path: "/levels/html/phase1", element: <HTMLPhase1LevelsPage /> },
  { path: "/levels/html/phase1/level1", element: <HTMLLevel1Page /> },
  { path: "/levels/html/phase1/level2", element: <HTMLLevel2Page /> },
  { path: "/levels/html/phase1/level3", element: <HTMLLevel3Page /> },
  { path: "/levels/html/phase1/level4", element: <HTMLLevel4Page /> },
  { path: "/levels/html/phase1/level5", element: <HTMLLevel5Page /> },
  { path: "/levels/html/phase1/level6", element: <HTMLLevel6Page /> },
  { path: "/levels/html/phase1/level7", element: <HTMLLevel7Page /> },
  { path: "/levels/html/phase1/level8", element: <HTMLLevel8Page /> },
  { path: "/levels/html/phase1/level9", element: <HTMLLevel9Page /> },
  { path: "/levels/html/phase1/level10", element: <HTMLLevel10Page /> }
];
