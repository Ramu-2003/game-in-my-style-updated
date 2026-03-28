import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase2Levels[6]}
      course="python"
      phase={2}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
