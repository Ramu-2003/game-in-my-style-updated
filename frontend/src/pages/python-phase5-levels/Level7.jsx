import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel7Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase5Levels[7]}
      course="python"
      phase={5}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
