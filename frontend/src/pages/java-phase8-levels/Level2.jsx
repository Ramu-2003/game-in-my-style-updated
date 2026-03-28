import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[2]}
      course="java"
      phase={8}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
