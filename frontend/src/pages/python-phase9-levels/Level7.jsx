import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase9Levels[7]}
      course="python"
      phase={9}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
