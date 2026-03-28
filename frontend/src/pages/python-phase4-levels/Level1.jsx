import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase4Levels[1]}
      course="python"
      phase={4}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
