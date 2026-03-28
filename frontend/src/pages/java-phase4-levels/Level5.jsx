import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[5]}
      course="java"
      phase={4}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
