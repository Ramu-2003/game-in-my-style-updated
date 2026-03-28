import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[6]}
      course="java"
      phase={2}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
