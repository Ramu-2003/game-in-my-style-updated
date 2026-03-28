import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase10Levels } from "../../config/javaPhase10Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase10Levels[5]}
      course="java"
      phase={10}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
