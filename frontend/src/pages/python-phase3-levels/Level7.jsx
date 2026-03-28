import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase3Levels[7]}
      course="python"
      phase={3}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
