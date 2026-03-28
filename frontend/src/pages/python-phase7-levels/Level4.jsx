import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel4Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase7Levels[4]}
      course="python"
      phase={7}
      levelNumber={4}
    />
  );
};

export default PythonLevel4Page;
