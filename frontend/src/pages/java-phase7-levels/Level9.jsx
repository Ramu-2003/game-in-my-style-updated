import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel9Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[9]}
      course="java"
      phase={7}
      levelNumber={9}
    />
  );
};

export default JavaLevel9Page;
