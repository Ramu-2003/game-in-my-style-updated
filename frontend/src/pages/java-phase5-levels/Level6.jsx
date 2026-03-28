import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[6]}
      course="java"
      phase={5}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
