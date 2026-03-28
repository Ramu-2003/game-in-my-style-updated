import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase6Levels[9]}
      course="python"
      phase={6}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
