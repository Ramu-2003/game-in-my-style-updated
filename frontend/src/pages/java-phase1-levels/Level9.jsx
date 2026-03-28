import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[9]}
      course="java"
      phase={1}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
