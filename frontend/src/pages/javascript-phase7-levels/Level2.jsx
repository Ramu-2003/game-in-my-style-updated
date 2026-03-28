import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[2]}
      course="javascript"
      phase={7}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
