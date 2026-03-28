import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase1Levels[9]}
      course="python"
      phase={1}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
