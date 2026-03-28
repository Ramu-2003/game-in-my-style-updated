import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[7]}
      course="java"
      phase={8}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
