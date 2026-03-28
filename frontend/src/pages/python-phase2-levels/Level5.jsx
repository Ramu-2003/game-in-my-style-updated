import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase2Levels[5]}
      course="python"
      phase={2}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
