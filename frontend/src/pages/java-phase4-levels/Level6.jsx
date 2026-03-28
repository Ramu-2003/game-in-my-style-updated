import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[6]}
      course="java"
      phase={4}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
