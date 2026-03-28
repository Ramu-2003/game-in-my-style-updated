import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[3]}
      course="java"
      phase={9}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
