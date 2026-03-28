import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel8Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[8]}
      course="java"
      phase={7}
      levelNumber={8}
    />
  );
};

export default JavaLevel8Page;
