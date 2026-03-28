import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[7]}
      course="java"
      phase={1}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
