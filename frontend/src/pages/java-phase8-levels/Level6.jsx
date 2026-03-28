import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[6]}
      course="java"
      phase={8}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
