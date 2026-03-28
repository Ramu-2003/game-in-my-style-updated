import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase6Levels[10]}
      course="python"
      phase={6}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
