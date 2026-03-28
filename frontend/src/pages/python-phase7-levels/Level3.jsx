import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase7Levels[3]}
      course="python"
      phase={7}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
