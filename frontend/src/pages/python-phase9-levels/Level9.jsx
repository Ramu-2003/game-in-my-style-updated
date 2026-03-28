import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase9Levels[9]}
      course="python"
      phase={9}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
