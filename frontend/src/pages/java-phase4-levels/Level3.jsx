import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[3]}
      course="java"
      phase={4}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
