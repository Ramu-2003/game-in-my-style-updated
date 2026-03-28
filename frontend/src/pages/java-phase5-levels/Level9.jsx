import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[9]}
      course="java"
      phase={5}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
