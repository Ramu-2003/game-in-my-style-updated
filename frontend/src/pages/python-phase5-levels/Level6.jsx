import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase5Levels[6]}
      course="python"
      phase={5}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
