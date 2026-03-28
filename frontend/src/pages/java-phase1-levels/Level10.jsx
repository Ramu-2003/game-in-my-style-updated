import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[10]}
      course="java"
      phase={1}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
