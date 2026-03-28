import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[5]}
      course="java"
      phase={1}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
