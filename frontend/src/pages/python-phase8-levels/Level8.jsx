import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase8Levels } from "../../config/pythonPhase8Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase8Levels[8]}
      course="python"
      phase={8}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
