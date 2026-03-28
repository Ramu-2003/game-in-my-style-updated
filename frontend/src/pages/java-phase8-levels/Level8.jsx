import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase8Levels } from "../../config/javaPhase8Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase8Levels[8]}
      course="java"
      phase={8}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
