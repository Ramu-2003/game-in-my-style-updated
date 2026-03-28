import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[2]}
      course="java"
      phase={6}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
