import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase4Levels[3]}
      course="python"
      phase={4}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
