import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase5Levels } from "../../config/javaPhase5Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase5Levels[8]}
      course="java"
      phase={5}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
