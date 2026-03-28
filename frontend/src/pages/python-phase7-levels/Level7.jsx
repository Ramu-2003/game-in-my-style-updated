import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel7Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase7Levels[7]}
      course="python"
      phase={7}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
