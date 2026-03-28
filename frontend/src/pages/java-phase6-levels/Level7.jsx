import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[7]}
      course="java"
      phase={6}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
