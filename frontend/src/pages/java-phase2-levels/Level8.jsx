import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase2Levels } from "../../config/javaPhase2Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase2Levels[8]}
      course="java"
      phase={2}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
