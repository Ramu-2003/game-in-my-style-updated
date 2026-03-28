import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[1]}
      course="java"
      phase={5}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
