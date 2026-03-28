import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[5]}
      course="java"
      phase={3}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
