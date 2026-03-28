import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[7]}
      course="java"
      phase={4}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
