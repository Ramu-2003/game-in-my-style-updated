import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[3]}
      course="java"
      phase={6}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
