import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[5]}
      course="java"
      phase={8}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
