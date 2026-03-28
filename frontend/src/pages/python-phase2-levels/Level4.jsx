import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase2Levels[4]}
      course="python"
      phase={2}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
