import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase5Levels } from "../../config/pythonPhase5Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase5Levels[8]}
      course="python"
      phase={5}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
