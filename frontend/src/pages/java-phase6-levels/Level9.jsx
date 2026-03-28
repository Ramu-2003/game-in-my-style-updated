import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[9]}
      course="java"
      phase={6}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
