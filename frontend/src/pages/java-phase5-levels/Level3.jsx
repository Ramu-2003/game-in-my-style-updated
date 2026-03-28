import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[3]}
      course="java"
      phase={5}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
