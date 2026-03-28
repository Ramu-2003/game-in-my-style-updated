import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[2]}
      course="java"
      phase={5}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
