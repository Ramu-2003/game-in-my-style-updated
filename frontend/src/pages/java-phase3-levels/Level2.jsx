import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[2]}
      course="java"
      phase={3}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
