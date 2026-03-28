import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase8Levels[5]}
      course="python"
      phase={8}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
