import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase1Levels } from "../../config/javaPhase1Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase1Levels[8]}
      course="java"
      phase={1}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
