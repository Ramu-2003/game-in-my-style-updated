import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase6Levels[1]}
      course="python"
      phase={6}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
