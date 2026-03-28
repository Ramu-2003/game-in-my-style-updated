import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase3Levels[10]}
      course="python"
      phase={3}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
