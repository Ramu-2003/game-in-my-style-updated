import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase4Levels[5]}
      course="python"
      phase={4}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
