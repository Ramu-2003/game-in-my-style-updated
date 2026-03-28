import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase4Levels } from "../../config/pythonPhase4Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase4Levels[8]}
      course="python"
      phase={4}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
