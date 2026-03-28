import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase7Levels[8]}
      course="python"
      phase={7}
      levelNumber={8}
    />
  );
};

export default PythonLevel8Page;
