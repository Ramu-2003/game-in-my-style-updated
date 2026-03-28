import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[3]}
      course="javascript"
      phase={2}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
