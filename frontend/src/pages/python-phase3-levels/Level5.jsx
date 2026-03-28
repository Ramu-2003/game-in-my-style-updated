import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase3Levels[5]}
      course="python"
      phase={3}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
