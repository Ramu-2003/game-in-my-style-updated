import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel1Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[1]}
      course="java"
      phase={7}
      levelNumber={1}
    />
  );
};

export default JavaLevel1Page;
