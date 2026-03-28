import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase7Levels[10]}
      course="python"
      phase={7}
      levelNumber={10}
    />
  );
};

export default PythonLevel10Page;
