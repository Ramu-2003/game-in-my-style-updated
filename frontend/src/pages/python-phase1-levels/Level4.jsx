import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase1Levels[4]}
      course="python"
      phase={1}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
