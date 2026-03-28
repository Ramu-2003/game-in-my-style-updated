import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[4]}
      course="java"
      phase={5}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
