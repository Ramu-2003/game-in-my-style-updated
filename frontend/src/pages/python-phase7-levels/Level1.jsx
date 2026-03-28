import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase7Levels[1]}
      course="python"
      phase={7}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
