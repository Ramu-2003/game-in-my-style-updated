import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel2Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase10Levels[2]}
      course="python"
      phase={10}
      levelNumber={2}
    />
  );
};

export default PythonLevel2Page;
