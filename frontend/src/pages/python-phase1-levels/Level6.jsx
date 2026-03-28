import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { pythonPhase1Levels } from "../../config/pythonPhase1Levels";

const PythonLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={pythonPhase1Levels[6]}
      course="python"
      phase={1}
      levelNumber={6}
    />
  );
};

export default PythonLevel6Page;
