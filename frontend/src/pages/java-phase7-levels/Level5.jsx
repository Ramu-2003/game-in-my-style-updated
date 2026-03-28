import JavaLevelTemplate from "../../components/levels/JavaLevelTemplate";
import { javaPhase7Levels } from "../../config/javaPhase7Levels";

const JavaLevel5Page = () => {
  return (
    <JavaLevelTemplate 
      challenge={javaPhase7Levels[5]}
      course="java"
      phase={7}
      levelNumber={5}
    />
  );
};

export default JavaLevel5Page;
