import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase4Levels[10]}
      course="python"
      phase={4}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
