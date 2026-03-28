import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[10]}
      course="java"
      phase={8}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
