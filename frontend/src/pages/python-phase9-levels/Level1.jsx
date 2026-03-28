import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase9Levels[1]}
      course="python"
      phase={9}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
