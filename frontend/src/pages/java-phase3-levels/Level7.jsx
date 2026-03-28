import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[7]}
      course="java"
      phase={3}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
