import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase1Levels[5]}
      course="python"
      phase={1}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
