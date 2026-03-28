import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase8Levels[3]}
      course="python"
      phase={8}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
