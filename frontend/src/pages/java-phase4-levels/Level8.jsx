import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase4Levels } from "../../config/javaPhase4Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase4Levels[8]}
      course="java"
      phase={4}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
