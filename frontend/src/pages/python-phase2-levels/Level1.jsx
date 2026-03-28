import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase2Levels[1]}
      course="python"
      phase={2}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
