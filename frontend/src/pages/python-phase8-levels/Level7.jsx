import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase8Levels[7]}
      course="python"
      phase={8}
      levelNumber={7}
    />
  );
};

export default PythonLevel7Page;
