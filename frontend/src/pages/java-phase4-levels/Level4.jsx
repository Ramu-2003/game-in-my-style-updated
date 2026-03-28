import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[4]}
      course="java"
      phase={4}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
