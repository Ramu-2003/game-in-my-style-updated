import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase5Levels[2]}
      course="python"
      phase={5}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
