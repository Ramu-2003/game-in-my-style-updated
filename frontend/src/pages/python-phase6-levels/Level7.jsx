import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase6Levels[7]}
      course="python"
      phase={6}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
