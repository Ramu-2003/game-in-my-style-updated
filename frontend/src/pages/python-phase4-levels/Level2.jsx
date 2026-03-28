import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase4Levels[2]}
      course="python"
      phase={4}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
