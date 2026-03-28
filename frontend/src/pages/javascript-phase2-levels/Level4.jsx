import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[4]}
      course="javascript"
      phase={2}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
