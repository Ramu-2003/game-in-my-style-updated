import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[5]}
      course="java"
      phase={6}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
