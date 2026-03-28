import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase5Levels[4]}
      course="python"
      phase={5}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
