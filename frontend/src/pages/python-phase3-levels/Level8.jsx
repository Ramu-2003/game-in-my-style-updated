import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase3Levels } from "../../config/pythonPhase3Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase3Levels[8]}
      course="python"
      phase={3}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
