import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase8Levels[9]}
      course="python"
      phase={8}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
