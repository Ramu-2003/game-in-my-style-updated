import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel6Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase7Levels[6]}
      course="python"
      phase={7}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
