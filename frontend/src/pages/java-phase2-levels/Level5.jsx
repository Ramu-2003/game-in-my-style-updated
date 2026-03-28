import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[5]}
      course="java"
      phase={2}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
