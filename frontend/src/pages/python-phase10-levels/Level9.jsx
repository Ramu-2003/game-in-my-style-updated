import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase10Levels[9]}
      course="python"
      phase={10}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
