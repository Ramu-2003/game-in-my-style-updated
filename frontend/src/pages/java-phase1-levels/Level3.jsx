import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[3]}
      course="java"
      phase={1}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
