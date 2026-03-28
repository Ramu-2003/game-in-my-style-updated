import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase4Levels[6]}
      course="python"
      phase={4}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
