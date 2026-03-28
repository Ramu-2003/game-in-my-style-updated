import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase1Levels[1]}
      course="python"
      phase={1}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
