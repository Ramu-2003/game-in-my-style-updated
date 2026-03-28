import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase1Levels[2]}
      course="python"
      phase={1}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
