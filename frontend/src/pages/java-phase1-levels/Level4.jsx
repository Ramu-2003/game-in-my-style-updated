import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[4]}
      course="java"
      phase={1}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
