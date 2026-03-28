import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[6]}
      course="java"
      phase={10}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
