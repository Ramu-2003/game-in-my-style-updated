import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[7]}
      course="java"
      phase={5}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
