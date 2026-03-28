import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase5Levels[9]}
      course="python"
      phase={5}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
