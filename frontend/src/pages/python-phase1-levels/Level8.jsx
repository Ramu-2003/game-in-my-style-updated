import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase1Levels[8]}
      course="python"
      phase={1}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
