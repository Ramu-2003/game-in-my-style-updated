import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[10]}
      course="java"
      phase={6}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
