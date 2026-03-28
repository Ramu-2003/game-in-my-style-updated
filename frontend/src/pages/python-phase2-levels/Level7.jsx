import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase2Levels[7]}
      course="python"
      phase={2}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
