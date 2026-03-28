import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[4]}
      course="javascript"
      phase={9}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
