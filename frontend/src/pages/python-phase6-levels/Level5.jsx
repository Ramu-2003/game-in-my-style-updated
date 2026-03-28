import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase6Levels[5]}
      course="python"
      phase={6}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
