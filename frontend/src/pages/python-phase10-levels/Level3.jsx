import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel3Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase10Levels[3]}
      course="python"
      phase={10}
      levelNumber={3}
    />
  );
};

export default PythonLevel3Page;
