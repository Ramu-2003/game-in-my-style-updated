import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[10]}
      course="java"
      phase={4}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
