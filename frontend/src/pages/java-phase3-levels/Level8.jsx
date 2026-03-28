import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase3Levels } from "../../config/javaPhase3Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase3Levels[8]}
      course="java"
      phase={3}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
