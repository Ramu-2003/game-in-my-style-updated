import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase1Levels[10]}
      course="python"
      phase={1}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
