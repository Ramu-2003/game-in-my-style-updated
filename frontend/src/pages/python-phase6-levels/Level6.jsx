import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase6Levels[6]}
      course="python"
      phase={6}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
