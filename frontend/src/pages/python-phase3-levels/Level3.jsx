import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase3Levels[3]}
      course="python"
      phase={3}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
