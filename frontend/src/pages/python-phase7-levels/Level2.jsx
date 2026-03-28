import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase7Levels[2]}
      course="python"
      phase={7}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
