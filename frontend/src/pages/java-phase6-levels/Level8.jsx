import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase6Levels } from "../../config/javaPhase6Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase6Levels[8]}
      course="java"
      phase={6}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
