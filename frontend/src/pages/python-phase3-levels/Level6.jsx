import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase3Levels[6]}
      course="python"
      phase={3}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
