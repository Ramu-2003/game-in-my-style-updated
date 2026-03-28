import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase8Levels[1]}
      course="python"
      phase={8}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
