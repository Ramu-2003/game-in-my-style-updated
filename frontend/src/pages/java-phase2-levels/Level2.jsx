import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[2]}
      course="java"
      phase={2}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
