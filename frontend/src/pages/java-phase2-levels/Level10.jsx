import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[10]}
      course="java"
      phase={2}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
