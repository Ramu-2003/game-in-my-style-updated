import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[10]}
      course="java"
      phase={9}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
