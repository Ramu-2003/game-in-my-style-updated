import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase6Levels[4]}
      course="python"
      phase={6}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
