import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[2]}
      course="java"
      phase={1}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
