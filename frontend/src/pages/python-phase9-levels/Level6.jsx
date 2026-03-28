import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase9Levels[6]}
      course="python"
      phase={9}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
