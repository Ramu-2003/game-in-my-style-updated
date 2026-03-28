import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[1]}
      course="java"
      phase={4}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
