import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase3Levels[9]}
      course="python"
      phase={3}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
