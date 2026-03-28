import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel7Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase4Levels[7]}
      course="python"
      phase={4}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
