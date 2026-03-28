import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase2Levels[10]}
      course="python"
      phase={2}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
