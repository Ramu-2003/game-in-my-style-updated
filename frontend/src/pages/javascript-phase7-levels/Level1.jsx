import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[1]}
      course="javascript"
      phase={7}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
