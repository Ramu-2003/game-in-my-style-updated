import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[10]}
      course="java"
      phase={3}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
