import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[4]}
      course="java"
      phase={8}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
