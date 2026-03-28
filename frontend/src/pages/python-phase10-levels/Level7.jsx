import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel7Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase10Levels[7]}
      course="python"
      phase={10}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
