import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[6]}
      course="java"
      phase={9}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
