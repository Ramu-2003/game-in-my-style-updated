import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[4]}
      course="javascript"
      phase={1}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
