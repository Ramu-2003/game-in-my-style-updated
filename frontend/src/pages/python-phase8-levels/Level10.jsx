import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase8Levels[10]}
      course="python"
      phase={8}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
