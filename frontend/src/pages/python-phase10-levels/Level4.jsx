import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase10Levels[4]}
      course="python"
      phase={10}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
