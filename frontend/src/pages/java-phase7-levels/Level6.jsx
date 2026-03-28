import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel6Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[6]}
      course="java"
      phase={7}
      levelNumber={6}
    />
  );
};

export default JavaLevel6Page;
