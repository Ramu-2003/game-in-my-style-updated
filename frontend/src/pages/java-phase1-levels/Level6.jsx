import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[6]}
      course="java"
      phase={1}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
