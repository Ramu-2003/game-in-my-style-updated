import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[2]}
      course="javascript"
      phase={2}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
