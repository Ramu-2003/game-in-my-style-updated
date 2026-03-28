import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[7]}
      course="java"
      phase={2}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
