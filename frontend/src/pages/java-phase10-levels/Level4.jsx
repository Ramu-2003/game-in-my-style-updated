import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[4]}
      course="java"
      phase={10}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
