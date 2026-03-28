import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[1]}
      course="java"
      phase={9}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
