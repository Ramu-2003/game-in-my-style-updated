import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase5Levels[5]}
      course="python"
      phase={5}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
