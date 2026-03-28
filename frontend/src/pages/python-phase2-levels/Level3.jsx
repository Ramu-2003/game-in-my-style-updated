import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase2Levels[3]}
      course="python"
      phase={2}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
