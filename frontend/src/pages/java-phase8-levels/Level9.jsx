import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[9]}
      course="java"
      phase={8}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
