import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[3]}
      course="java"
      phase={2}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
