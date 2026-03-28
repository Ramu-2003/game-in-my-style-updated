import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[2]}
      course="java"
      phase={4}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
