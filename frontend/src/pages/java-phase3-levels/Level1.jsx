import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[1]}
      course="java"
      phase={3}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
