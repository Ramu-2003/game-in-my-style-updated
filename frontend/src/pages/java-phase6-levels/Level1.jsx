import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[1]}
      course="java"
      phase={6}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
