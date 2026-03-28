import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase3Levels[4]}
      course="python"
      phase={3}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
