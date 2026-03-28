import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase10Levels[6]}
      course="python"
      phase={10}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
