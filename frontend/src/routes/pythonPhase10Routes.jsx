import PythonPhase10LevelsPage from "../pages/python-phase10-levels";
import PythonLevel1Page from "../pages/python-phase10-levels/Level1";
import PythonLevel2Page from "../pages/python-phase10-levels/Level2";
import PythonLevel3Page from "../pages/python-phase10-levels/Level3";
import PythonLevel4Page from "../pages/python-phase10-levels/Level4";
import PythonLevel5Page from "../pages/python-phase10-levels/Level5";
import PythonLevel6Page from "../pages/python-phase10-levels/Level6";
import PythonLevel7Page from "../pages/python-phase10-levels/Level7";
import PythonLevel8Page from "../pages/python-phase10-levels/Level8";
import PythonLevel9Page from "../pages/python-phase10-levels/Level9";
import PythonLevel10Page from "../pages/python-phase10-levels/Level10";

export const pythonPhase10Routes = [
  { path: "/levels/python/phase10", element: <PythonPhase10LevelsPage /> },
  { path: "/levels/python/phase10/level1", element: <PythonLevel1Page /> },
  { path: "/levels/python/phase10/level2", element: <PythonLevel2Page /> },
  { path: "/levels/python/phase10/level3", element: <PythonLevel3Page /> },
  { path: "/levels/python/phase10/level4", element: <PythonLevel4Page /> },
  { path: "/levels/python/phase10/level5", element: <PythonLevel5Page /> },
  { path: "/levels/python/phase10/level6", element: <PythonLevel6Page /> },
  { path: "/levels/python/phase10/level7", element: <PythonLevel7Page /> },
  { path: "/levels/python/phase10/level8", element: <PythonLevel8Page /> },
  { path: "/levels/python/phase10/level9", element: <PythonLevel9Page /> },
  { path: "/levels/python/phase10/level10", element: <PythonLevel10Page /> }
];
