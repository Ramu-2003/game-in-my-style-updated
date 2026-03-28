import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[4]}
      course="java"
      phase={9}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
