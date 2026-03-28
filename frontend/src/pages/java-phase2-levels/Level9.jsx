import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[9]}
      course="java"
      phase={2}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
