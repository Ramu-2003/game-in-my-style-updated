import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase1Levels[7]}
      course="python"
      phase={1}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
