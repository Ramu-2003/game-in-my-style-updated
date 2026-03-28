import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel10Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[10]}
      course="java"
      phase={7}
      levelNumber={10}
    />
  );
};

export default JavaLevel10Page;
