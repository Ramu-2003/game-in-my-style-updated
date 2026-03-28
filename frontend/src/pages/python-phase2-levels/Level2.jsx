import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase2Levels[2]}
      course="python"
      phase={2}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
