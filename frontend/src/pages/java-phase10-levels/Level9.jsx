import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[9]}
      course="java"
      phase={10}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
