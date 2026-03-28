import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase10Levels[10]}
      course="python"
      phase={10}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
