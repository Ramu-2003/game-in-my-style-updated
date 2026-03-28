import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase6Levels[2]}
      course="python"
      phase={6}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
