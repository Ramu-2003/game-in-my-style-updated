import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[9]}
      course="java"
      phase={9}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
