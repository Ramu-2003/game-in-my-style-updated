import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase2Levels } from "../../config/pythonPhase2Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase2Levels[8]}
      course="python"
      phase={2}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
