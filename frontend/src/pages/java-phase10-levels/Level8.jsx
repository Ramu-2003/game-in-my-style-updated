import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[8]}
      course="java"
      phase={10}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
