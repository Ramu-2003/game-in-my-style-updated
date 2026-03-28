import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[9]}
      course="java"
      phase={4}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
