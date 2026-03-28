import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase4Levels[9]}
      course="python"
      phase={4}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
