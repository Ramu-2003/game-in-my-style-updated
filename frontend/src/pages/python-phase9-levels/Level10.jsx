import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase9Levels[10]}
      course="python"
      phase={9}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
