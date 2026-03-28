import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[10]}
      course="java"
      phase={10}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
