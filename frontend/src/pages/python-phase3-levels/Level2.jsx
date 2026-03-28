import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase3Levels[2]}
      course="python"
      phase={3}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
