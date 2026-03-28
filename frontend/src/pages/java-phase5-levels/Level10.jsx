import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[10]}
      course="java"
      phase={5}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
