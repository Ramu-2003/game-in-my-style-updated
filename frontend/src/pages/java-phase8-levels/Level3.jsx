import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[3]}
      course="java"
      phase={8}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
