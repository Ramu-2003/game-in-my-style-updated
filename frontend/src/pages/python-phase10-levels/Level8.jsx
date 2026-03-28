import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase10Levels[8]}
      course="python"
      phase={10}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
