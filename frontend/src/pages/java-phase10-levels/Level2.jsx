import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[2]}
      course="java"
      phase={10}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
