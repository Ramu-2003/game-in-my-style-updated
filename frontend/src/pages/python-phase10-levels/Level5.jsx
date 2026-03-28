import PythonLevelTemplate from "../../components/levels/PythonLevelTemplate";
import { pythonPhase10Levels } from "../../config/pythonPhase10Levels";

const PythonLevel5Page = () => {
  return (
    <PythonLevelTemplate 
      challenge={pythonPhase10Levels[5]}
      course="python"
      phase={10}
      levelNumber={5}
    />
  );
};

export default PythonLevel5Page;
