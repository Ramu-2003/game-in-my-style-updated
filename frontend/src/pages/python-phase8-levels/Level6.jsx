import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase8Levels[6]}
      course="python"
      phase={8}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
