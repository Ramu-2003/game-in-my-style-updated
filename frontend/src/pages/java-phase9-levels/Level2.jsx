import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[2]}
      course="java"
      phase={9}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
