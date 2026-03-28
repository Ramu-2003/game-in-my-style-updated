import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[5]}
      course="java"
      phase={5}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
