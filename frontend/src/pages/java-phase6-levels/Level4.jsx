import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[4]}
      course="java"
      phase={6}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
