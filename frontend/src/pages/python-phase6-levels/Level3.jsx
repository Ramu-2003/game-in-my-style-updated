import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase6Levels[3]}
      course="python"
      phase={6}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
