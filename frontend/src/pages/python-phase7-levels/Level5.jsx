import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase7Levels } from "../../config/pythonPhase7Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase7Levels[5]}
      course="python"
      phase={7}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
