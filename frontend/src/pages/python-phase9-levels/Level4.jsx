import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase9Levels[4]}
      course="python"
      phase={9}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
