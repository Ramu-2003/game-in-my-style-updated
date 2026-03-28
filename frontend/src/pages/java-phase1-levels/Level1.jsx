import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[1]}
      course="java"
      phase={1}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
