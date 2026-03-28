import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel2Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[2]}
      course="java"
      phase={7}
      levelNumber={2}
    />
  );
};

export default JavaLevel2Page;
