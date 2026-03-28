import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase10Levels[1]}
      course="python"
      phase={10}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
