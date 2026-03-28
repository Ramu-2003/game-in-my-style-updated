import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel4Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[4]}
      course="java"
      phase={7}
      levelNumber={4}
    />
  );
};

export default JavaLevel4Page;
