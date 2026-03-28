import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase3Levels[1]}
      course="python"
      phase={3}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
