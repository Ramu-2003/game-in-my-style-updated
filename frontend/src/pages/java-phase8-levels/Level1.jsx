import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[1]}
      course="java"
      phase={8}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
