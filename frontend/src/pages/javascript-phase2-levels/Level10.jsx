import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[10]}
      course="javascript"
      phase={2}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
