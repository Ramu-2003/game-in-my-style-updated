import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase9Levels[3]}
      course="python"
      phase={9}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
