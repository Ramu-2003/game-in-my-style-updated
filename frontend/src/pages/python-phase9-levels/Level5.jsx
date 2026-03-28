import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase9Levels[5]}
      course="python"
      phase={9}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
