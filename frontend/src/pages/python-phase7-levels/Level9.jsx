import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase7Levels[9]}
      course="python"
      phase={7}
      levelNumber={9}
    />
  );
};

export default PythonLevel9Page;
