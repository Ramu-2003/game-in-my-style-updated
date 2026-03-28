import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase9Levels } from "../../config/javaPhase9Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase9Levels[8]}
      course="java"
      phase={9}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
