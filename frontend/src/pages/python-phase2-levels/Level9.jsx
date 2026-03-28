import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase2Levels[9]}
      course="python"
      phase={2}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
