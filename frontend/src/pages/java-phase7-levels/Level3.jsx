import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel3Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[3]}
      course="java"
      phase={7}
      levelNumber={3}
    />
  );
};

export default JavaLevel3Page;
