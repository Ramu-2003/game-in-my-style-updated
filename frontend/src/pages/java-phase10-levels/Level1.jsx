import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[1]}
      course="java"
      phase={10}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
