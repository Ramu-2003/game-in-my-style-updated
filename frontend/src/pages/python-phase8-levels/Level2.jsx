import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase8Levels[2]}
      course="python"
      phase={8}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
