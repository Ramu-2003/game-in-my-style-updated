import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[5]}
      course="java"
      phase={9}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
