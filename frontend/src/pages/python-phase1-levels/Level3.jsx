import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase1Levels[3]}
      course="python"
      phase={1}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
