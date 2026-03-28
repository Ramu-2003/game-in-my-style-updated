import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[4]}
      course="java"
      phase={3}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
