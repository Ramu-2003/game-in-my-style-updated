import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase8Levels[4]}
      course="python"
      phase={8}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
