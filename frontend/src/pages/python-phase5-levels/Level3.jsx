import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase5Levels[3]}
      course="python"
      phase={5}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
