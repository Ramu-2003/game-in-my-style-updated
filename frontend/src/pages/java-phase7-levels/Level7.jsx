import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[7]}
      course="java"
      phase={7}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
