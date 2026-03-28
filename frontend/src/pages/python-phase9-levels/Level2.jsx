import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase9Levels[2]}
      course="python"
      phase={9}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
