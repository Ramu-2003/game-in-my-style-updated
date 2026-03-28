import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel1Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase5Levels[1]}
      course="python"
      phase={5}
      levelNumber={1}
    />
  );
};

export default PythonLevel1Page;
