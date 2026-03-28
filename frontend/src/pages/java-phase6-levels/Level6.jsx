import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[6]}
      course="java"
      phase={6}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
