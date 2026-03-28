import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[1]}
      course="java"
      phase={2}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
