import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase9Levels } from "../../config/pythonPhase9Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase9Levels[8]}
      course="python"
      phase={9}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
