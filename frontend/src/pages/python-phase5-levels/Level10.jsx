import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase5Levels[10]}
      course="python"
      phase={5}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
