import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[7]}
      course="java"
      phase={9}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
