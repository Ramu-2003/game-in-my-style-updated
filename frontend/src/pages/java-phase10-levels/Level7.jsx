import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel7Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[7]}
      course="java"
      phase={10}
      levelNumber={7}
    />
  );
};

export default JavaLevel7Page;
