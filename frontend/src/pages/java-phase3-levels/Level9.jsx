import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[9]}
      course="java"
      phase={3}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
