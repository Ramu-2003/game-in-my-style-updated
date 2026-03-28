import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[3]}
      course="java"
      phase={3}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
