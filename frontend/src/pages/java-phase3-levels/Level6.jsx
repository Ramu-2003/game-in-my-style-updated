import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[6]}
      course="java"
      phase={3}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
