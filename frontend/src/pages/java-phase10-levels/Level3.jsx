import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[3]}
      course="java"
      phase={10}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
