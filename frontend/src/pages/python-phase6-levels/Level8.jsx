import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase6Levels } from "../../config/pythonPhase6Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase6Levels[8]}
      course="python"
      phase={6}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
