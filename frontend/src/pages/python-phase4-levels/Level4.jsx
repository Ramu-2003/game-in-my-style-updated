import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase4Levels[4]}
      course="python"
      phase={4}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
